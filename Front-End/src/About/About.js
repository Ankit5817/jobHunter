import React from 'react'
import aboutImg from '../images/about.jpg'
import googleImg from '../images/1.png'
import microsoftImg from '../images/2.png'
import wiproImg from '../images/4.png'
import amazonImg from '../images/3.png'
import avatar1 from '../images/avatar1.png'
import avatar2 from '../images/avatar2.png'
import avatar3 from '../images/avatar3.png'
import './About.css'

export default function About() {
  return (
    <>
      <div className="container-fluid">
        <div className="row sec1">
          <div className="col-md-6 col-11 pe-5 d-flex align-items-center">
            <div>
              <h1>About Us</h1>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia atque nostrum ab omnis voluptatum maiores ullam quos error, eaque placeat, laudantium obcaecati alias dolor ex. Eaque quam saepe facilis, recusandae odit laboriosam doloremque repellendus quo provident sed expedita perferendis! Exercitationem, repudiandae quis. Dolor exercitationem hic perspiciatis iste. Harum, possimus.</span>
            </div>
          </div>
          <div className='col-md-6 col-11'>
            <img src={aboutImg} alt="" id='aboutimg' />
          </div>
        </div>
      </div>
      {/* Section - 2 */}
      <div className="row sec2 mb-5 mt-5 py-5">
        <div>
          <h2 className='text-white mb-5'>Top Companies For You</h2>
        </div>
        <div className="col-md-3 col-11 my-2">
          <div className="card" style={{ width: "15rem" }}>
            <img src={googleImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Google</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-11 my-2">
          <div className="card" style={{ width: "15rem" }}>
            <img src={wiproImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Wipro</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-11 my-2">
          <div className="card" style={{ width: "15rem" }}>
            <img src={amazonImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Amazon</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-11 my-2">
          <div className="card" style={{ width: "15rem" }}>
            <img src={microsoftImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Microsoft</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Section-3 */}
      <div className="row sec3 mb-5 mt-5 py-5">
        <div>
          <h2 className='mb-5'>Happy Clients</h2>
        </div>
        <div className="col-md-4 col-11 text-center my-2 cardContainer">
          <div className="cardSec3" style={{ width: "25rem" }}>
            <img src={avatar1} alt="..." />
            <div className="card-body">
              <h5 className="card-title my-2">Peter Parker</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-11 text-center my-2 cardContainer">
          <div className="cardSec3" style={{ width: "25rem" }}>
            <img src={avatar2} alt="..." />
            <div className="card-body">
              <h5 className="card-title my-2">Tony Stark</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-11 text-center my-2 cardContainer">
          <div className="cardSec3" style={{ width: "25rem" }}>
            <img src={avatar3} alt="..." />
            <div className="card-body">
              <h5 className="card-title my-2">Chris Evans</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
