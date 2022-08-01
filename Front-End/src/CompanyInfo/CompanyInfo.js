import React from 'react'
import './CompanyInfo.css'
import { Link } from 'react-router-dom'

export default function CompanyInfo() {
    return (
        <div className='bg-white box p-4 border border-secondary'>
            <div>
                <h5>JobHunter Private Limited</h5>
            </div>
            <div className='mb-2'>
                <span className='text-muted'>jobhunter@gmail.com</span>
            </div>
            <div className='mb-2'>
                <span className='text-muted'>+91-6512396548, +91-7561423696</span>
            </div>
            <div className='mb-2'>
                <span className='text-muted'>D-359, Sector - 10, Noida, U.P-110092</span>
            </div>
            <div className='text-center mt-4'>
                <Link to='/about'><button type='button' className='search text-white w-25'>About Us</button></Link>
            </div>
        </div>
    )
}
