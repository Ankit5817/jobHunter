import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function ResetPass() {
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')

    const navigate = useNavigate()

    const resetPass = () => {
        if (password === confirmPassword) {
            const pathname = window.location.pathname
            axios.post(`http://localhost:3050/api/reset/password/${pathname.split('/')[3]}/${pathname.split('/')[4]}`, {
                password
            }).then(res => {
                if (res.data.msg === 'password updated successfully') {
                    toast.success("Password Updated Successfully")
                    navigate('/login')
                } else {
                    toast.error("Invalid Token")
                }
            })
        } else {
            toast.error("Password & Confirm Password not same")
        }
    }

    return (
        <>
            <div id='body' className='container-fluid'>
                <div className="row text-center justify-content-center">
                    <div className="col-md-6 col-11">
                        <div className='border border-secondary rounded py-5' id='box'>
                            <h2 className='mb-3'><u>Enter Password</u></h2>
                            <div className="input-group mb-1 mt-2 px-5">
                                <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e) => setpassword(e.target.value)} placeholder='Password' />
                            </div>
                            <div className="input-group mb-3 px-5">
                                <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e) => setconfirmPassword(e.target.value)} placeholder='Confirm Password' />
                            </div>
                            <button className='text-white' type='button' onClick={resetPass}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </>
    )
}
