import React from 'react'
import appContext from './AppContext'
import axios from 'axios'

export default function AppStates(props) {

    const [userLoginNav, setuserLoginNav] = React.useState({
        status: false,
        changeStatus: (str) => {
            userLoginNav.status = str
            setuserLoginNav({ ...userLoginNav })
        },
        // ................................................
        category: [],
        setCategory: (data) => {
            userLoginNav.category = data
            setuserLoginNav({ ...userLoginNav })
        },
        addCategory: (data) => {
            data.map(item => {
                userLoginNav.category.push(item)
            })
            setuserLoginNav({ ...userLoginNav })
        },
        page: 1,
        setPage: (num) => {
            userLoginNav.page = num
            setuserLoginNav({ ...userLoginNav })
        },
        type: 'none',
        setType: (str) => {
            userLoginNav.type = str
            setuserLoginNav({ ...userLoginNav })
        },
        place: 'none',
        setPlace: (str) => {
            userLoginNav.place = str
            setuserLoginNav({ ...userLoginNav })
        },
        showMore: async () => {
            await axios.post(`http://localhost:3050/api/jobs/${userLoginNav.page}`, {
                category: userLoginNav.type,
                location: userLoginNav.place
            }).then(res => {
                userLoginNav.addCategory(res.data)
            })
        }
    })

    return (
        <appContext.Provider value={userLoginNav}>
            {props.children}
        </appContext.Provider>
    )
}
