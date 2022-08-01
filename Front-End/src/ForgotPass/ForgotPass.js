import React, { useState } from 'react'
import './ForgotPass.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPass() {

    const [email, setemail] = useState('')

    const sendMail = () => {
        axios.post('http://localhost:3050/api/forgotPass', {
            email
        }).then(res => {
            if(res.data.message === 'Invalid email id'){
                toast.error(res.data.message)
            } else if(res.data.message === 'Link has been sent to your email id') {
                toast.success(res.data.message)
            } else {
                toast.error('Link coud not be sent to your email id')
            }
        })
    }

    return (
        <>        <div id='body' className='container-fluid'>
            <div className="row text-center justify-content-center">
                <div className="col-md-6 col-11">
                    <div className='border border-secondary rounded py-5' id='box'>
                        <h2><u>Enter Email</u></h2>
                        <div className="input-group mb-3 px-5">
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <button className='text-white' type='button' onClick={sendMail}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
            <ToastContainer position="top-center" />
        </>
    )
}
