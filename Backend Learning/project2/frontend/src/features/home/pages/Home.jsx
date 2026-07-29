import React from 'react'
import FaceExpression from './../../expression/components/FaceExpression'
import Player from '../components/Player'
import './Home.css'

const Home = () => {
    return (
        <div className="home">

            {/* ── Navbar ── */}
            <nav className="home__nav">
                <div className="home__logo">
                    <div className="home__logo-icon">🎵</div>
                    <span className="home__logo-text">Moodify</span>
                </div>
                <div className="home__nav-tag">
                    <span className="home__nav-dot" />
                    AI Mood Detection
                </div>
            </nav>

            {/* ── Main ── */}
            <main className="home__body">

                <div className="home__camera-panel">
                    <div className="home__section-label">
                        📷 Face Detection
                        <span className="home__section-line" />
                    </div>
                    <FaceExpression />
                </div>

                <div className="home__player-panel">
                    <div className="home__section-label">
                        🎧 Now Playing
                        <span className="home__section-line" />
                    </div>
                    <Player />
                </div>

            </main>

        </div>
    )
}

export default Home
