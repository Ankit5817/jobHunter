import Banner from '../Banner/Banner'
import CompanyInfo from '../CompanyInfo/CompanyInfo'
import Search from '../Search/Search'
import JobCard from '../JobCard/JobCard'
import AppContext from '../Context/AppContext'
import { useContext } from 'react'

export default function Home() {

    return (
        <div>
            <div style={{ backgroundColor: '#edecff' }}>
                <Banner />
                <div className="container-fluid mt-3" style={{ width: "93%" }}>
                    <div className="row">
                        <div className="col-md-8">
                            <Search />
                            <JobCard />
                        </div>
                        <div className="col-md-4 px-0 ps-2">
                            <CompanyInfo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
