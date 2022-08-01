import React, { useEffect, useState, useContext } from 'react'
import './WishList.css'
import wishlistimg from '../images/wishlist.jpg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import AppContext from '../Context/AppContext'

export default function WishList() {

  const [wishList, setwishList] = useState([])

  const state = useContext(AppContext)

  useEffect(() => {
    state.changeStatus(true)
    const pathname = window.location.pathname
    axios.get(`http://localhost:3050/api/getwishlist/${pathname.split('/')[2]}`).then(res => {
      setwishList(res.data)
    })
  },[])

  const removeJob = (jobId) => {
    const pathname = window.location.pathname
    axios.post(`http://localhost:3050/api/deleteWishlist/${pathname.split('/')[2]}`, {
      jobId
    }).then(res => {
      if (res.data.success === true) {
        toast.success('Removed from Wishlist', {
          position: "bottom-right"
        })
        let find = wishList.find(item => item.id === jobId)
        let index = wishList.indexOf(find)
        wishList.splice(index, 1)
        setwishList([...wishList])
      }
    })
  }

  return (
    <>
      <div className="container">
        <div className="row wSec1">
          <div className="col-md-6 col-11">
            <img src={wishlistimg} alt="" />
          </div>
          <div className="col-md-6 col-11">
            <h1>My Wishlist</h1>
            <span>Your wishlist contain jobs you love and you may wanted to apply for them later</span>
          </div>
        </div>
      </div>
      <div className='wSec2 pt-3 pb-5'>
        {
          wishList.length === 0 ? <div className="d-flex justify-content-center my-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div> : wishList.map(item => <div key={uuidv4()} className="row justify-content-center mt-0">
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
                  <div className='float-end'>
                    <button className='text-white me-2'><a href={item.applyLink}>Apply</a></button>
                    <button className='text-white me-2' onClick={() => removeJob(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )
        }
      </div>
      <ToastContainer />
    </>
  )
}
