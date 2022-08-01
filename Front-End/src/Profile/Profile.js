import React, { useEffect, useState, useContext } from 'react'
import './Profile.css'
import banner from '../images/banner.png'
import avatar from '../images/Profile-img.png'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppContext from '../Context/AppContext'

export default function Profile() {

  // const state = useContext(AppContext)

  // state.changeStatus(true)

  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setemail] = useState('')
  const [gender, setgender] = useState('')
  const [location, setlocation] = useState('')
  const [jobProfile, setjobProfile] = useState('')
  const [qualification, setqualification] = useState('')
  const [experience, setexperience] = useState('')
  const [phone, setphone] = useState('')
  const [brief, setbrief] = useState('')

  useEffect(() => {
    const pathname = window.location.pathname
    axios.get(`http://localhost:3050/api/getUser/${pathname.split('/')[2]}`).then(res => {
      setfirstName(res.data.firstName)
      setlastName(res.data.lastName)
      setemail(res.data.email)
      setgender(res.data.gender)
      setlocation(res.data.location)
      setjobProfile(res.data.jobProfile)
      setqualification(res.data.qualification)
      setexperience(res.data.experience)
      setphone(res.data.phone)
      setbrief(res.data.brief)
    })
  }, [])

  const editInfo = () => {
    const pathname = window.location.pathname
    axios.post(`http://localhost:3050/api/updateUser/${pathname.split('/')[2]}`, {
      firstName, lastName, email, gender, location, jobProfile, qualification, experience, phone, brief
    }).then(res => {
      if (res.data.success === true) {
        toast.success('Edit Successfull', {
          position: "bottom-right"
        })
        // setTimeout(() => {
        //   window.location.reload();
        // }, 1000);
      } else {
        toast.error('Something went wrong', {
          position: "bottom-right"
        })
      }
    })
  }

  return (
    <div className="container">
      <div className="row py-3" id='section'>
        <div className="col-md-7 col-11 text-center">
          <img src={banner} alt="" id='imgBanner' />
          <textarea
            className="form-control"
            rows="5"
            placeholder='Brief about you...'
            defaultValue={brief}
            onChange={(e) => setbrief(e.target.value)}
          ></textarea>
        </div>
        <div className="col-md-5 col-11 text-center">
          <div>
            <img src={avatar} alt="" id='avatar' className='mt-3' />
            <h3>Hi {firstName}</h3>
          </div>
          <div>
            <input type="text" placeholder='First Name' defaultValue={firstName} onChange={(e) => setfirstName(e.target.value)} />
            <input type="text" placeholder='Last Name' defaultValue={lastName} onChange={(e) => setlastName(e.target.value)} />
            <input type="text" placeholder='Email' defaultValue={email} onChange={(e) => setemail(e.target.value)} />
            <input type="text" placeholder='Gender' defaultValue={gender} onChange={(e) => setgender(e.target.value)} />
            <input type="text" placeholder='Location' defaultValue={location} onChange={(e) => setlocation(e.target.value)} />
            <input type="text" placeholder='Job Profile' defaultValue={jobProfile} onChange={(e) => setjobProfile(e.target.value)} />
            <input type="text" placeholder='Qualification' defaultValue={qualification} onChange={(e) => setqualification(e.target.value)} />
            <input type="text" placeholder='Experience' defaultValue={experience} onChange={(e) => setexperience(e.target.value)} />
            <input type="text" placeholder='Phone' defaultValue={phone} onChange={(e) => setphone(e.target.value)} />
          </div>
          <button className='text-white' onClick={editInfo}>Edit</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
