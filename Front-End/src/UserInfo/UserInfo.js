import React, { useState, useEffect } from 'react'
import './UserInfo.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function UserInfo() {

    const [userInfo, setuserInfo] = useState({})

    const { email } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3050/api/getUser/${email}`).then((res) => {
            setuserInfo(res.data)
        })
    }, [])

    return (
        <div className='bg-white box p-4 mt-5 my-3 text-center border border-secondary'>
            <div>
                <p className='text-white p-4 fs-4' id='initials'>
                    {
                        userInfo.firstName ? <>{userInfo.firstName[0]}{userInfo.lastName[0]}</> : null
                    }
                </p>
            </div>
            <div>
                <h5 className='fw-bold'>{userInfo.firstName} {userInfo.lastName}</h5>
            </div>
            <div className='mb-2'>
                <span className='text-muted'>{userInfo.email}</span>
            </div>
            <div className='mb-2'>
                {
                    userInfo.phone ? <span className='text-muted'>{userInfo.phone}</span> : <a href="#" className="stretched-link text-primary" style={{ position: "relative" }}>Add phone number</a>
                }

            </div>
            <div className='mb-2'>
                {
                    userInfo.phone ? <span className='text-muted'>{userInfo.qualification}</span> : <a href="#" className="stretched-link text-primary" style={{ position: "relative" }}>Add Qualification</a>
                }
            </div>
            <div className='text-center mt-4'>
                <Link to={`/profile/${email}`}><button type='button' className='search text-white w-25 mx-2'>Profile</button></Link>
                <Link to={`/wishList/${email}`}><button type='button' className='search text-white w-25 mx-2'>WishList</button></Link>
            </div>
        </div>
    )
}
