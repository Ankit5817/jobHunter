import React, { useContext, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import AppContext from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'

export default function Header() {

    const state = useContext(AppContext)

    // const navigate = useNavigate()

    const pathname = window.location.pathname

    const change = () => {
        localStorage.removeItem("token")
        state.changeStatus(false)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <Link id='brandName' className="navbar-brand fs-4 fw-bold ms-3" to="/">JobHunter</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                {
                    state.status === false ? <ul className="navbar-nav">
                        <li className="nav-item ms-2">
                            <Link className="nav-link text-light links text-center py-1" to="/register">Register</Link>
                        </li>
                        <li className="nav-item ms-2 me-5">
                            <Link to='/login' className="nav-link text-light links text-center py-1" >Login</Link>
                        </li>
                    </ul> : <ul className="navbar-nav">
                        <li className="nav-item ms-2 px-0">
                            <Link className="nav-link text-light links text-center py-1 careerBtn" to={`/career/advice`}>Career Advice</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light links text-center py-1 applied" to={`/applied/jobs/${pathname.split('/')[2]}`}>Applied Jobs</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link text-light links text-center py-1 me-4" onClick={change}  to='/'>Logout</Link>
                        </li>
                    </ul>
                }

            </div>
        </nav>
    )
}
