import React from 'react'
import Faceexpression from './../../expression/components/FaceExpression'
import Player from '../components/Player'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="home__left">
                <Faceexpression />
            </div>
            <div className="home__right">
                <Player />
            </div>
        </div>
    )
}

export default Home
