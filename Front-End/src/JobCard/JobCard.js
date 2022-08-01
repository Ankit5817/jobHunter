import React, { useEffect } from 'react'
import './JobCard.css'
import axios from 'axios'
import { useContext } from 'react'
import AppContext from '../Context/AppContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function JobCard() {

    const state = useContext(AppContext)

    useEffect(() => {
        axios.post(`http://localhost:3050/api/jobs/${state.page}`, {
            category: "none",
            location: "none"
        }).then((res) => {
            state.setCategory(res.data)
        })
    }, [])

    const nextPage = async () => {
        await state.setPage(++state.page)
        state.showMore()
    }

    const addToWishlist = (jobId) => {
        const pathname = window.location.pathname
        axios.post(`http://localhost:3050/api/updateWishlist/${pathname.split('/')[2]}`, {
            jobId
        }).then(res => {
            toast.success('Added to Wishlist', {
                position: "bottom-right"
            })
        })
    }

    const applyWithUs = (jobId) => {
        const pathname = window.location.pathname
        axios.post(`http://localhost:3050/api/apply/${pathname.split('/')[2]}`,{
            jobId
        }).then(res => {
            if(res.data.success === true){
                toast.success('Applied Successfully', {
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
        <div className='px-0' id='jobCard'>
            {
                state.category.length === 0 ? <div className="d-flex justify-content-center my-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> : state.category.map(item => <div key={item.id} className="card mt-3" >
                    <div className="card-body">
                        <div>
                            <h5 className="card-title d-inline"><u>{item.companyName}</u></h5>
                            <p className="text-muted d-inline float-end">{item.publishDate.slice(0, 10)}</p>
                        </div>
                        <span className="card-subtitle mb-2">{item.position}</span><br />
                        <span className="card-text">{item.location[0].name}</span>
                        <p className="card-text mt-0 text-muted" dangerouslySetInnerHTML={{ __html: item.description.slice(0, 200) }}></p>
                        <div className='float-end buttons'>
                            <div><button className='text-white me-2'><a href={item.applyLink}>Apply</a></button></div>
                            {
                                state.status === false ? null : <div><button className='text-white me-2' onClick={()=>applyWithUs(item.id)}>Appy with Us</button><button className='text-white' onClick={() => addToWishlist(item.id)}>Add To Wishlist</button></div>
                            }
                        </div>
                    </div>
                </div>)
            }
            <div className='text-center'><button className='text-white my-3' onClick={nextPage}>Show More</button></div>
            <ToastContainer />
        </div>
    )
}
