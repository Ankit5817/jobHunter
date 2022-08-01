import React, { useState, useContext } from 'react'
import img from '../images/login.webp';
import './Login.css'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import AppContext from '../Context/AppContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img1 from '../images/admin.jpg'

const Login = () => {

    let navigate = useNavigate()

    const state = useContext(AppContext)

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const userLogin = () => {
        axios.post('http://localhost:3050/api/login', {
            email: email,
            password: password
        }).then(res => {
            if (res.data.msg === 'invalid email') {
                toast.error('Email id not registered');
            } else if (res.data.msg === 'invalid password') {
                toast.error('Invalid Password')
            } else if (res.data.msg === 'login successfull') {
                toast.success('Login Successfull')
                localStorage.setItem("token", res.data.token)
                state.changeStatus(true)
                navigate(`/home/${res.data.email}`)
            } else {
                toast.error('Something went wrong')
            }
        })
    }

    const adminLogin = () => {
        axios.post('http://localhost:3050/api/check/admin',{
            userName: email,
            password: password
        }).then(res => {
            console.log(res.data)
            if(res.data.success === true) {
                state.changeStatus(true)
                navigate('/admin')
            } else if(res.data.success === false) {
                toast.error('Invalid Credentials')
            }
        })
    }

    return (
        <>
            <div id='login' className='container-fluid'>
                <div className="row justify-content-center">
                    <div className="col-md-5 col-11 d-flex align-items-center justify-content-center text-center">
                        <form className='py-5 px-4 rounded form'>
                            <div className='mt-2'><h2><u>User Login</u></h2></div>
                            <div className='mt-4'><input type="text" placeholder='Email' className='inputFields' onChange={(e) => { setemail(e.target.value) }} /></div>
                            <div className=' w-75'><input type="password" placeholder='Password' className='inputFields' onChange={(e) => { setpassword(e.target.value) }} /></div>
                            <div className='mt-1'><Link to="/forgot/password">Forgot Password ?</Link></div>
                            <div className='mt-2 mb-2'><button type='button' onClick={userLogin} className='text-white'>Sign In</button></div>
                        </form>
                    </div>
                    <div className="col-md-5 col-11 text-start">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
            <div className='hr'>
                <hr />
            </div>
            <div id='login' className='container-fluid mb-5'>
                <div className="row justify-content-center">
                    <div className="col-md-5 col-11 text-center">
                        <img src={img1} alt="" className='img1' />
                    </div>
                    <div className="col-md-5 col-11 d-flex align-items-center justify-content-center text-center">
                        <form className='py-5 px-4 rounded form'>
                            <div className='mt-2'><h2><u>Admin Login</u></h2></div>
                            <div className='mt-4'><input type="text" placeholder='Email' className='inputFields' onChange={(e) => { setemail(e.target.value) }} /></div>
                            <div className=' w-75'><input type="password" placeholder='Password' className='inputFields' onChange={(e) => { setpassword(e.target.value) }} /></div>
                            <div className='mt-2 mb-2'><button type='button' onClick={adminLogin} className='text-white'>Sign In</button></div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </>
    )
}

export default Login