import Banner from '../Banner/Banner'
import CompanyInfo from '../CompanyInfo/CompanyInfo'
import Search from '../Search/Search'
import JobCard from '../JobCard/JobCard'
import axios from 'axios'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserInfo from '../UserInfo/UserInfo'
import AppContext from '../Context/AppContext'
import './UserHome.css'


export default function UserHome() {

    const [userAuth, setuserAuth] = useState(false)

    const navigate = useNavigate()

    const state = useContext(AppContext)

    const verifyUser = () => {
        const token = localStorage.getItem('token')
        axios.post('http://localhost:3050/api/profile/page', {
            token
        }).then(res => {
            if (res.data.success === true) {
                state.changeStatus(true)
                setuserAuth(true)
            } else {
                state.changeStatus(false)
                navigate('/')
            }
        })
    }

    verifyUser()

    return (
        <>
            {
                userAuth === true ? <div style={{ backgroundColor: '#edecff' }}>
                    <Banner />
                    <div className="container-fluid mt-3" style={{ width: "93%" }}>
                        <div className="row">
                            <div className="col-md-8">
                                <Search />
                                <JobCard />
                            </div>
                            <div className="col-md-4 px-0 ps-2">
                                <UserInfo />
                                <CompanyInfo />
                            </div>
                        </div>
                    </div>
                </div> : <div className="loader border boder-danger" >
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }

        </>
    )
}



