import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import img from '../images/applied.jpg'
import './AppliedJobs.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AppliedJobs() {

    const [appliedJobs, setappliedJobs] = useState([])

    useEffect(() => {
        const func = async () => {
            const pathname = window.location.pathname
            await axios.get(`http://localhost:3050/api/applied/jobs/${pathname.split('/')[3]}`).then(res => {
                setappliedJobs(res.data)
            })
            
        }
        func()
    }, [])

    const checkStatus = (jobId) => {
        const pathname = window.location.pathname
        axios.post('http://localhost:3050/api/check/status',{jobId, email: pathname.split('/')[3]}).then(res => {
            if(res.data.msg === 'ShortListed'){
                toast.success('Congratulations! You are shortlisted', {
                    position: "top-center"
                })
            } else if(res.data.msg === 'Rejected') {
                toast.error('Sorry! Your application is rejected', {
                    position: "top-center"
                })
            } else {
                toast.info('Your application is pending', {
                    position: "top-center"
                })
            }
        })
    }

    return (
        <div className='appliedPage'>
            <div className="container">
                <div className="row wSec1">
                    <div className="col-md-6 col-11">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-md-6 col-11">
                        <h1 className='appliedContent'>Job Status</h1>
                        <span className='appliedContent'>We have send your application to the companies in which you applied. Your status will get updated if there is any action taken by the company</span>
                    </div>
                </div>
            </div>
            <div className='wSec2 pt-3 pb-5'>
                {
                    appliedJobs.length === 0 ? <div className="d-flex justify-content-center my-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> : appliedJobs.map(item => <div key={uuidv4()} className="row justify-content-center mt-0">
                        <div className="col-md-6 col-11">
                            <div className="card mt-3" >
                                <div className="card-body">
                                    <div>
                                        <h5 className="card-title d-inline"><u>{item.companyName}</u></h5>
                                        <p className="text-muted d-inline float-end">{item.publishDate.slice(0, 10)}</p>
                                    </div>
                                    <span className="card-subtitle mb-2">{item.position}</span><br />
                                    <span className="card-text">{item.location[0].name}</span>
                                    <p className="card-text mt-0 text-muted" dangerouslySetInnerHTML={{ __html: item.description.slice(0, 200) }}></p>
                                    < button className='btn btn-primary' onClick={() => checkStatus(item.id)}>Check Status</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
                <ToastContainer />
            </div>
        </div>
    )
}
