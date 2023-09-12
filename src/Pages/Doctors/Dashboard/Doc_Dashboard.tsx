import React, { useEffect,useState } from "react";
import Loader from "../../../Components/Loader/index";
import CustomPagination from "../../../Components/Pagination/CustomPagination";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Dropdown } from "antd";
import { MenuProps, Switch } from "antd";
import ModalContainer from "../../../Components/ModalContainer/ModalContainer";
import Input from "../../../Components/Input/Input";
import { AiOutlineSearch } from "react-icons/ai";
import { Radio } from "antd";
import { get } from "http";
import { ReportAPI } from "../../../apis/reportapi";



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


const Doc_Dashboard = () => {
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
  const getReportDoc = async (phone:any) => {
    try {
        setLoading(true);
        const reportData = await ReportAPI.getReportDoc(phone);
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

  useEffect(() => {
    getReportDoc(phoneNumber);
  });

  return (
    <div className="mt-[20px] w-[100%] overflow-x-scroll md:overflow-hidden">
      <div className="mb-[20px] flex gap-[15px]">
        <p className="font-semibold text-[20px]">DOCTOR</p>
      </div>
      <div className="mt-[30px]">
          <Input
            label="Enter Phone number of whose report is to be fetched"
            name="phone"
            type="text"
            placeholder="Enter patient's Phone number"
            className="rounded-[12px]"
            value={phoneNumber}
            handleChange={(e:any) => setPhoneNumber(e.target.value)}
          />
        <button
           onClick={() => {
            setFormSubmitted(true);
          }}
          className="bg-[#7F32AC] text-[#fff] text-[14px] px-[45px] mx-auto font-semibold rounded-[12px] py-[8px] mt-[15px]"
        >
          Submit
        </button>
        <button
          className="bg-red-600 text-[#fff] text-[14px] px-[45px] mx-auto font-semibold rounded-[12px] py-[8px] mt-[15px] ml-[15px]"
        >
          Cancel
        </button>
      </div>
      
      <div className="mt-[30px]"> 
      {formSubmitted && (
      <div>
          <p className="font-semibold text-[15px]">Name of patient: {reportData.name}</p>
          <p className="font-semibold text-[15px] ">Age: {reportData.age}</p>
          <p className="font-semibold text-[15px] ">Gender: {reportData.gender}</p>

          <p className="font-semibold text-[15px] mb-[10px] ">Reports:</p>
          <Table columns={columns} dataSource={reportData.reports} pagination={false} />
      </div>
      )}
      </div>
      
    </div>
  );
};

export default Doc_Dashboard;
