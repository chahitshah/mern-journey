import React from 'react'
import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/image2.png'
import Image3 from '../../assets/image3.png'
import './Section3.scss'
const Section3 = () => {
  return (
    <div className="section3">
        <div className="cards">
            <div className="card1">
                <img src={Image1} alt="" />
            </div>
            <div className="card2">
                <img src={Image2} alt="" />
            </div>
            <div className="card3">
                <img src={Image3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Section3