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
import { LABLOGIN, LOGINDOC, LOGINPHONE } from "../../Components/navigation/Constant";



const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
    <header className="container flex justify-between items-center shadow-md md:shadow-none h-20">
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
    <main className="container mt-16 mb-16 md:flex flex-row-reverse justify-between items-center">
        <div className="md:max-w-[50%] mt-16">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmiugD3Nsu2rdHrE5qKHG4P7T5hZm0taEiw&s" 
                alt="hero" 
                className="h-[300px] w-auto" 
            />
        </div>
        <div className="text-center sm:text-left md:max-w-[40%]">
            <h1 className="font-bold text-4xl leading-[60px]">Making Lives Better</h1>
            <p className="mt-4 text-[18px] leading-[28px] font-normal">
                Your Comprehensive Health Timeline: Connecting Patients, Doctors, and Labs
            </p>
            <div className="mt-8 flex flex-col items-center sm:items-start sm:space-y-4">
                <button className="transparent-button" onClick={() => navigate(LOGINPHONE)}>Sign in As Patient</button>
                <button className="transparent-button" onClick={() => navigate(LOGINDOC)}>Sign in As Doctor</button>
                <button className="transparent-button" onClick={() => navigate(LABLOGIN)}>Sign in As Lab</button>
                {/* <button className="purple-button">Sign up</button> */}
            </div>
        </div>
    </main>

   
    <section className="container mt-16">
        <h2 className="text-3xl font-bold text-center">About Us</h2>
        <p className="mt-4 text-center text-[18px] leading-[28px] font-normal">
            Learn more about our mission, values, and the dedicated team behind Health History.
        </p>
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="md:w-1/2">
                <img 
                    src="data:image/jpeg;base64,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" 
                    alt="About Us" 
                    className="h-[300px] w-auto rounded-lg shadow-lg"
                />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
                <p>
                    Our mission is to enhance the health care experience for patients, doctors, and laboratories. We aim to create a seamless platform that connects all stakeholders in the health care ecosystem.
                </p>
            </div>
        </div>
    </section>

  
    <section className="container mt-16">
        <h2 className="text-3xl font-bold text-center">Gallery</h2>
        <p className="mt-4 text-center text-[18px] leading-[28px] font-normal">
            Explore our gallery to see how we are making a difference.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-200 h-[200px] flex items-center justify-center rounded-lg shadow-md">
                <p className="text-lg font-semibold">Image 1</p>
            </div>
            <div className="bg-gray-200 h-[200px] flex items-center justify-center rounded-lg shadow-md">
                <p className="text-lg font-semibold">Image 2</p>
            </div>
            <div className="bg-gray-200 h-[200px] flex items-center justify-center rounded-lg shadow-md">
                <p className="text-lg font-semibold">Image 3</p>
            </div>
            <div className="bg-gray-200 h-[200px] flex items-center justify-center rounded-lg shadow-md">
                <p className="text-lg font-semibold">Image 4</p>
            </div>
            <div className="bg-gray-200 h-[200px] flex items-center justify-center rounded-lg shadow-md">
                <p className="text-lg font-semibold">Image 5</p>
            </div>
            <div className="bg-gray-200 h-[200px] flex items-center justify-center rounded-lg shadow-md">
                <p className="text-lg font-semibold">Image 6</p>
            </div>
        </div>
    </section>

   
    <section className="container mt-16 mb-16">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <p className="mt-4 text-center text-[18px] leading-[28px] font-normal">
            We'd love to hear from you! Reach out to us for any questions or feedback.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
            <form className="w-full max-w-md space-y-4">
                <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                />
                <textarea 
                    placeholder="Message" 
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                ></textarea>
                <button type="submit" className="purple-button w-full">
                    Send Message
                </button>
            </form>
        </div>
    </section>
</div>

  );
};

export default Home;
