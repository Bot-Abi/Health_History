import React, { useEffect } from "react";
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
import { MenuIcon } from "@heroicons/react/solid";

const Home = () => {
 

  return (
    <div>
    <header className="container flex justify-between  items-center shadow-md md:shadow-none h-20 ">
    <h1 className="text-3xl font-bold">Health History</h1>
    <div className="flex items-center space-x-3 lg:space-x-8">
        <p className="nav-item">Home</p>
        <p className="nav-item">About</p>
        <p className="nav-item">Gallery</p>
        <p className="nav-item">Contact</p>
        <button className="transparent-button">Sign in</button>
        <button className="purple-button">Sign up</button>
    </div>
    </header>
    <main className="container mt-4 md:flex flex-row-reverse justify-between items-center">
            <div className="md:max-w-[50%]">
                <img src="https://img.lovepik.com/element/40159/8653.png_1200.png" alt="hero" />
            </div>
            <div className="text-center sm:text-left md:max-w-[40%]">
                <h1 className="font-bold text-4xl leading-[60px]">
                Making Lives Better
                </h1>
                <p className="mt-4 text-[18px] leading-[28px] font-normal">
                Your Comprehensive Health Timeline:
                Connecting Patients,Doctors and Labs
                </p>
                <div className="mt-8 flex items-center justify-around sm:justify-start sm:space-x-8">
                <button className="transparent-button">Sign in</button>
                <button className="purple-button">Sign up</button>
                </div>
            </div>
    </main>
 </div>
  );
};

export default Home;
