import React, { useEffect, useState, useContext } from 'react'
import './AdminPage.css'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import AppContext from '../Context/AppContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminPage() {

    const state = useContext(AppContext)

    const [jobsData, setjobsData] = useState([])
    const [userData, setuserData] = useState({})
    const [jobId, setjobId] = useState('')
    const [userEmail, setuserEmail] = useState('')

    useEffect(() => {
        state.changeStatus(true)
        const fetchData = async () => {
            await axios.get('http://localhost:3050/api/admin/jobList').then(res => {
                setjobsData(res.data)
            })
        }

        fetchData()

    }, [])

    const getUserData = (email) => {
        axios.get(`http://localhost:3050/api/getUser/${email}`).then(res => {
            setuserData(res.data)
        })
    }

    const changeStatus = (status, jobId, email) => {
        axios.post('http://localhost:3050/api/change/status', {
            status, jobId, email
        }).then(res => {
            if (res.data.success === true) {
                toast.success(`User ${status}`, {
                    position: "bottom-right"
                })
            } else {
                toast.error('Something went wrong', {
                    position: "bottom-right"
                  })
            }
        })
    }

    return (
        <div className='container secAdmin mb-3'>
            <h2 className='text-center py-3 head'><u>Admin Dashboard</u></h2>
            {
                jobsData.map(item =>
                    <div key={uuidv4()} className="row p-3 my-2 adminJobBox border rounded">
                        <div className="col-md-6 col-11">
                            <div className="card my-2" style={{ width: "90%", height: "96%" }}>
                                <div className="card-body">
                                    <div>
                                        <h5 className="card-title d-inline"><u>{item.companyName}</u></h5>
                                        <p className="text-muted d-inline float-end">{item.publishDate.slice(0, 10)}</p>
                                    </div>
                                    <span className="card-subtitle mb-2">{item.position}</span><br />
                                    <span className="card-text">{item.location[0].name}</span>
                                    <p className="card-text mt-0 text-muted" dangerouslySetInnerHTML={{ __html: item.description.slice(0, 200) }}></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-11">
                            {
                                item.userId.map(element =>
                                    <div key={uuidv4()} className="card my-2" style={{ width: "95%" }}>
                                        <div className="card-body">
                                            <div>
                                                <h5 className="card-title d-inline mt-2">{element.email}</h5>
                                                <button type="button" className="btn btn-primary float-end mx-1" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getUserData(element.email)}>
                                                    Know More
                                                </button>
                                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">User Info</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <h4><strong>Name:</strong> {userData.firstName} {userData.lastName}</h4>
                                                                <div><span><strong>Email:</strong> {userData.email}</span></div>
                                                                <div><span><strong>Qualification:</strong> {userData.qualification}</span></div>
                                                                <div><span><strong>Experience:</strong> {userData.experience}yrs</span></div>
                                                                <div><span><strong>Gender:</strong> {userData.gender}</span></div>
                                                                <div><span><strong>Job Profile:</strong> {userData.jobProfile}</span></div>
                                                                <div><span><strong>Location:</strong> {userData.location}</span></div>
                                                                <div><span><strong>Phone:</strong> {userData.phone}</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button className='btn btn-success mx-1 float-end' onClick={() =>changeStatus('ShortListed', item.id, element.email)}>Accept</button>
                                                <button className='btn btn-danger mx-1 float-end' onClick={() =>changeStatus('Rejected', item.id, element.email)}>Reject</button>
                                            </div>
                                        </div>
                                    </div>)
                            }
                        </div>
                    </div>)
            }
            <ToastContainer />
        </div >
    )
}
