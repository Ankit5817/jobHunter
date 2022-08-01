import React, { useEffect, useState } from 'react'
import './AdminPage.css'
import axios from 'axios'

export default function AdminPage() {

    const [list, setlist] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3050/api/getall/adminData').then(res => {
            console.log(res.data.data)
            setlist(res.data.data)
        })
    }, [])


    return (
        <div className='container secAdmin'>
            <h2 className='text-center py-3 head'><u>Admin Dashboard</u></h2>
            {
                list.map(item => <div className="row justify-content-center">
                    <div className="col-md-6 col-11 border border-dark rounded mb-3">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Job Id-{item.jobId}</th>
                                    <th scope='col'></th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    item.userId.map(x => <tr>
                                        <th scope="row">&#x21a6;</th>
                                        <td></td>
                                        <td>{x}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>)
            }
        </div>
    )
}
