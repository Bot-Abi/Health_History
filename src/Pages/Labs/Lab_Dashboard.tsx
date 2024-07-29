import React, { useEffect,useState } from "react";
import Loader from "../../Components/Loader/index";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Dropdown } from "antd";
import { MenuProps, Switch } from "antd";
import ModalContainer from "../../Components/ModalContainer/ModalContainer";
import Input from "../../Components/Input/Input";
import { AiOutlineSearch } from "react-icons/ai";
import { Radio } from "antd";
import { get } from "http";
import { ReportAPI } from "../../apis/reportapi";



interface ReportData {
    date: string;
    test_name: string;
    lab: string;
    lab_name: string;
    patient_name: string;
  }
  
// interface ReportData {
//     name: string;
//     reports: Report[];
//   }


const Lab_Dashboard = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = React.useState(false);
  const [reportData, setReportData] = useState<any>([]);
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Test Name',
      dataIndex: 'test_name',
      key: 'test_name',
    },
    {
      title: 'Lab Name',
      dataIndex: 'lab_name',
      key: 'lab_name',
    },
    {
        title: 'Report Pdf',
        dataIndex: 'report_pdf',
        key: 'report_pdf',
        render: (text:any, record:any) => (
          <a href={text} target="_blank" rel="noopener noreferrer">
            View Report
          </a>
        ),
      },
  ];

  const sampleReportData = {
    name: 'John Doe',
    age: 35,
    gender: 'Male',
    reports: [
        {
            key: '1',
            date: '2023-07-01',
            test_name: 'Blood Test',
            lab_name: 'LabCorp',
            report_pdf: 'https://example.com/report1.pdf',
        },
        {
            key: '2',
            date: '2023-07-02',
            test_name: 'X-Ray',
            lab_name: 'Quest Diagnostics',
            report_pdf: 'https://example.com/report2.pdf',
        },
        {
            key: '3',
            date: '2023-07-03',
            test_name: 'MRI',
            lab_name: 'BioReference',
            report_pdf: 'https://example.com/report3.pdf',
        },
        {
            key: '4',
            date: '2023-07-04',
            test_name: 'Ultrasound',
            lab_name: 'LabCorp',
            report_pdf: 'https://example.com/report4.pdf',
        },
        {
            key: '5',
            date: '2023-07-05',
            test_name: 'CT Scan',
            lab_name: 'Quest Diagnostics',
            report_pdf: 'https://example.com/report5.pdf',
        },
    ]
};


  const getReportDoc = async (phone:any) => {
    try {
        setLoading(true);
        // const reportData = await ReportAPI.getReportDoc(phone);
        const reportData = sampleReportData;
        console.log("Report Data:", reportData.reports);
        setReportData(reportData);

      } catch (err) {
        console.log("Some error occurred:", err);
        // const errMsg =
        //   err?.response?.data?.message || err?.message || "Something went wrong";
        // toast.error(errMsg);
      } finally {
        setLoading(false);
      }
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e:any) => {
      setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    getReportDoc(phoneNumber);
  });
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const handleSubmit = () => {
    if (selectedFile) {
        // Simulate file upload process
        setTimeout(() => {
            setUploadSuccess(true);
        }, 1000); // Simulate a 1-second upload time
    }
    setFormSubmitted(true);
};

  return (
    <div className="mt-[20px] w-[100%] overflow-x-scroll md:overflow-hidden">
      <div className="mb-[20px] flex gap-[15px]">
        <p className="font-semibold text-[20px]">LAB REPORT</p>
      </div>
      <div className="mt-[30px]">
          <Input
            label="Enter Phone number of whose report is to be uploaded"
            name="phone"
            type="text"
            placeholder="Enter patient's Phone number"
            className="rounded-[12px]"
            value={phoneNumber}
            handleChange={(e:any) => setPhoneNumber(e.target.value)}
          />
            <input 
                type="file" 
                accept="application/pdf" 
                onChange={handleFileChange} 
                className="mt-[15px] block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-[12px] file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            />
        <button
        //    onClick={() => {
        //     setFormSubmitted(true);
        //   }}
          onClick={handleSubmit}
          className="bg-[#7F32AC] text-[#fff] text-[14px] px-[45px] mx-auto font-semibold rounded-[12px] py-[8px] mt-[15px]"
        >
          Submit
        </button>
        <button
          className="bg-red-600 text-[#fff] text-[14px] px-[45px] mx-auto font-semibold rounded-[12px] py-[8px] mt-[15px] ml-[15px]"
        >
          Cancel
        </button>
        {uploadSuccess && (
                <div className="mt-[15px] p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-[12px] border border-green-300" role="alert">
                    <span className="font-semibold">Success:</span> File uploaded successfully!
                </div>
            )}
      </div>
      
      <div className="mt-[30px]"> 
      {/* {formSubmitted && (
      <div>
          <p className="font-semibold text-[15px]">Name of patient: {reportData.name}</p>
          <p className="font-semibold text-[15px] ">Age: {reportData.age}</p>
          <p className="font-semibold text-[15px] ">Gender: {reportData.gender}</p>

          <p className="font-semibold text-[15px] mb-[10px] ">Reports:</p>
          <Table columns={columns} dataSource={reportData.reports} pagination={false} />
      </div>
      )} */}
      </div>
      
    </div>
  );
};

export default Lab_Dashboard;
