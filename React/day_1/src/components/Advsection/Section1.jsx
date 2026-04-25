import React from 'react'
import './Section1.scss'
import playImg from '../../assets/play1.jpg'
const Section1 = () => {
  return (
    <div className="image">
        <img src={playImg} alt="" />
        <div className="mainpara">
          <h1>Unleash Your Inner Champion Today. All In One Place</h1>
          <div className="para1">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam optio numquam aspernatur magni autem velit minima quae ullam nostrum fugit.</p>
          </div>
          <button className="btn">Start your own journey</button>
        </div>
    </div>
  )
}

export default Section1