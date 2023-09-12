import React, { useEffect } from "react";
// import Dashboard from "../../../components/Dashboard/DashboardLayout";
// import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
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
// import { BASE_URL } from "../../../constants/apiConstant";
import { get } from "http";

const Dashboard = () => {
  const [loading, setLoading] = React.useState(false);
  const [pagination, setPagination] = React.useState<any>({});
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [importData, setImportData] = React.useState<any>({
    myfile: null,
    record_size: 0,
  });

  
  const employees = [
    {
      emp_id: 1,
      is_active: true,
      first_name: "John",
      last_name: "Doe",
      age:16,
      email: "john@example.com",
      mobile_no: "123-456-7890",
      emp_code: "EMP001",
      ssn: "XXX-XX-XXXX",
    },
    {
      emp_id: 2,
      is_active: false,
      age:19,
      first_name: "Jane",
      last_name: "Smith",
      email: "jane@example.com",
      mobile_no: "987-654-3210",
      emp_code: "EMP002",
      ssn: "YYY-YY-YYYY",
    },
    {
      emp_id: 1,
      is_active: true,
      first_name: "John",
      last_name: "Doe",
      age:16,
      email: "john@example.com",
      mobile_no: "123-456-7890",
      emp_code: "EMP001",
      ssn: "XXX-XX-XXXX",
    },
    {
      emp_id: 2,
      is_active: false,
      age:19,
      first_name: "Jane",
      last_name: "Smith",
      email: "jane@example.com",
      mobile_no: "987-654-3210",
      emp_code: "EMP002",
      ssn: "YYY-YY-YYYY",
    },
    {
      emp_id: 1,
      is_active: true,
      first_name: "John",
      last_name: "Doe",
      age:16,
      email: "john@example.com",
      mobile_no: "123-456-7890",
      emp_code: "EMP001",
      ssn: "XXX-XX-XXXX",
    },
    {
      emp_id: 2,
      is_active: false,
      age:19,
      first_name: "Jane",
      last_name: "Smith",
      email: "jane@example.com",
      mobile_no: "987-654-3210",
      emp_code: "EMP002",
      ssn: "YYY-YY-YYYY",
    },
    {
      emp_id: 1,
      is_active: true,
      first_name: "John",
      last_name: "Doe",
      age:16,
      email: "john@example.com",
      mobile_no: "123-456-7890",
      emp_code: "EMP001",
      ssn: "XXX-XX-XXXX",
    },
    {
      emp_id: 2,
      is_active: false,
      age:19,
      first_name: "Jane",
      last_name: "Smith",
      email: "jane@example.com",
      mobile_no: "987-654-3210",
      emp_code: "EMP002",
      ssn: "YYY-YY-YYYY",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Email ",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "mobile_no",
      key: "mobile_no",
    },
    {
      title: "Issue",
      dataIndex: "emp_code",
      key: "emp_code",
    },
    {
      title: "Report",
      dataIndex: "ssn",
      key: "ssn",
    },
  ];

  const navigate = useNavigate();

  
 
  return (
    <div className="mt-[20px] w-[100%] overflow-x-scroll md:overflow-hidden">
      <div className="mb-[20px] flex gap-[15px]">
        <p className="font-semibold text-[20px] ">
          Patients
        </p>
        <div className="flex items-center ml-auto justify-center hidden md:block border-[#e5e5e5] px-[10px]">
          <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Patient Search"
            className="px-4 py-2 pl-10 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
          />
          <span className="absolute left-3 top-3">
            <AiOutlineSearch />
          </span>
        </div>

        </div>
        <button
          className=" text-white rounded-[4px] text-[14px] bg-purple-600 ml-auto md:ml-[10px] py-[7px] px-[20px]"
        >
          New
        </button>
      </div>

    <Table columns={columns} dataSource={employees} pagination={false} />
    <div className="w-[100%] mt-[30px] items-end justify-end flex">
      <CustomPagination
        total={pagination?.total}
        current={currentPage}
        onChange={(page: any, pageSize: any) => {
          setCurrentPage(page === 0 ? 1 : page);
          setPageSize(pageSize);
        }}
      />
    </div>
    </div>
    
  );
};

export default Dashboard;
