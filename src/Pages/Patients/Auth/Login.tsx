import React, { useEffect,useState } from 'react'
import Input from '../../../Components/Input/Input'
import { toast, ToastContainer } from 'react-toastify'
import Loader from '../../../Components/Loader/index'
import { useNavigate } from 'react-router-dom'
import OtpInput from '../../../Components/OtpInput/OtpInput'
import { AuthAPI } from '../../../apis/authAPI'
import { LOGINPHONE, PATIENT_DASHBOARD_REPORT } from '../../../Components/navigation/Constant'
const img = require('../../../images/kids.jpeg')

const initialErrorState = {
    error: false,
    msg: ''
}

const Login = () => {

    const [patient, setPatient] = React.useState<any>(localStorage.getItem('registeredUser') ? JSON.parse(localStorage.getItem('registeredUser') || '') : null)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const [loading, setLoading] = React.useState(false)

   
    const navigate = useNavigate()
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState('');
    
    const handleLogin = async () => {
        console.log(patient);
        try {
            setLoading(true)
            const data = await AuthAPI.postVerifyOtp({
                "uid": email,
                "otp": Number(otp),
            })
            console.log(data);
            if (data.success='true'){
                navigate(PATIENT_DASHBOARD_REPORT)
                localStorage.setItem('user',JSON.stringify(data))
                localStorage.setItem('token', data.data.token.access)
                localStorage.setItem('refreshToken', data.data.token.access)
                localStorage.setItem('user', JSON.stringify(data)) 
            }
            else{
                return toast.error('Incorrect OTP')
            }
        } catch (error: any) {
            const errMsg = error?.response?.data?.message || error?.message || "something went wrong"
            console.log(errMsg)
            return toast.error(errMsg);
        } finally {
            setLoading(false)
        }
    }

    const handleSendOTP = async() => {
        if (email){
            setOtpSent(true);
        }
        try {
            setLoading(true)
            const data = await AuthAPI.postUID({
                "uid": email,
            })

            if (data.success) {
                console.log("Otp sent");
                console.log(data);
            }

        } catch (error: any) {
            const errMsg = error?.response?.data?.message || error?.message || "something went wrong"
            console.log(errMsg)
            return toast.error(errMsg);
        } finally {
            setLoading(false)
        }
      };


    return (
        <div className='flex min-h-screen w-screen overflow-hidden overflow-x-hidden'>

            <div className='w-1/2 container mx-auto flex flex-col items-center mt-[200px]'>

                <ToastContainer />
                
                {
                    loading && <Loader />
                }

                <div className='flex flex-col gap-[10px] card w-[80%]md:w-[40%] shadow-[0px_0px_8px_rgba(0,0,0,0.1)] bg-[#ffffff] py-[30px] px-[20px] rounded-[8px]  mx-auto'>
                    <h1 className='text-center text-[#7F32AC] text-3xl font-bold'>LOGIN</h1>
                    <h3 className='text-center text-2xl font-bold text-[#555555]'>
                        SIGN IN TO YOUR ACCOUNT
                    </h3>
                    
                    <div className='flex flex-col gap-[10px] w-[100%] mt-[30px] mx-auto'>
                          <Input label="UID" name="email" type="email" placeholder="Enter your Aadhar number" className=" rounded-[12px]" value={email} handleChange={(e: any) => setEmail(e.target.value)}/>
                       {
                            otpSent ? <>
                                < OtpInput value={otp} valueLength={4} onChange={(value:any) => setOtp(value)} />
                                <button className="bg-[#7F32AC] text-[#fff] text-[14px] px-[45px] mx-auto font-semibold rounded-[12px] py-[8px] mt-[15px]" onClick={handleLogin}>
                                Verify OTP
                                </button>
                            </> : null
                        }

                    </div>{!otpSent && (
                            <div>
                                <button className="bg-[#7F32AC] text-[#fff] text-[14px] px-[45px] mx-auto font-semibold rounded-[12px] py-[8px] mt-[15px]" onClick={handleSendOTP}>
                                Send OTP
                                </button>
                            </div>
                            )}
                     
                    <p className='text-[#000] text-center text-[#000]/[0.7] mt-[15px] font-medium'>Want to Sign In with Phone Number? <span className='text-right text-[#7F32AC] hover:underline cursor-pointer' onClick={() => {
                        navigate(LOGINPHONE)
                    }}>Click here</span>.</p>
                </div>

            </div>
            <div className="w-1/2 relative">
            <img
                src={img}
                alt="Your Image"
                className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute top-5 left-0 right-0 mx-auto max-w-[50%] p-4 text-center text-[#000] text-6xl rounded-t-lg font-lora font-bold">
                Health History
            </div>
            <div className="absolute bottom-10 left-0 right-0 mx-auto max-w-[90%] bg-white bg-opacity-10 p-4 text-center text-[#000] text-xl rounded-lg font-serif font-medium">
                Your Comprehensive Health Timeline: Connecting Patients, Doctors and Labs
            </div>
            </div>
        </div>
    )
}

export default Login