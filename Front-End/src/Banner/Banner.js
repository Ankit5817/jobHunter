import React from 'react'
import img1 from '../images/banner_img1.png'
import img2 from '../images/banner_img2.png'
import './Banner.css'

export default function Banner() {
    return (
        <div className="bg-white d-flex align-items-center justify-content-center" id='banner'>
            <div className="row text-center">
                <div className="col-md-4 col-11 d-flex justify-content-center align-items-center">
                    <img src={img1} alt="" className='img' />
                </div>
                <div className="col-md-4 col-11 d-flex justify-content-center align-items-center">
                    <h3 className='text-center text-white py-3 px-2'>Choose a job you love, and you will never
                        have to work a day in your life.</h3>
                </div>
                <div className="col-md-4 col-11 d-flex justify-content-center align-items-center">
                    <img src={img2} alt="" className='img' />
                </div>
            </div>
        </div>
    )
}
