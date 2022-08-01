import React, { useState } from 'react'
import './Search.css'
import axios from 'axios'
import { useContext } from 'react'
import AppContext from '../Context/AppContext'

export default function Search() {

    const state = useContext(AppContext)

    const [category, setcategory] = useState('')
    const [location, setlocation] = useState('none')

    const searchJob = async () => {
        await state.setPage(1)
        await state.setType(category)
        await state.setPlace(location)
        axios.post(`http://localhost:3050/api/jobs/${state.page}`, {
            category,
            location
        }).then(res => {
            state.setCategory(res.data)
        })
    }

    return (
        <div>
            <form>
                <div className="row">
                    <div className="col-md-6 px-0">
                        <input type="text" className='jobRole ps-3 bg-white' placeholder='Search job you love to do...' onChange={(e) => setcategory(e.target.value)} />
                    </div>
                    <div className="col-md-4 px-0">
                        <input type="text" className='location ps-3 bg-white' placeholder='Location' onChange={(e) => setlocation(e.target.value)}/>
                    </div>
                    <div className="col-md-2 px-0 mt-1">
                        <button type='button' className='search text-white' onClick={searchJob}>Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
