import React from 'react'
import dbgIgLogo from '../../assets/dbg_ig.png'
import dhopsIgLogo from '../../assets/dhops_ig.png'
import dhopsYtLogo from '../../assets/dhops_yt.png'
import thriftIgLogo from '../../assets/thrift_ig.png'
import artistateLogo from '../../assets/artistate2.png'
import cardenLogo from '../../assets/cardensg.jpg'
import mamadiamLogo from '../../assets/mamadiam.png'

import heinekenLogo from '../../assets/heineken2.png'

// import dbgBackground from '../../assets/dbg_background.png'
import dbgTeleLogo from '../../assets/dbg_tele.png'
import './home.css'

const Home = () => {
    return (
        <div className="home">
            {/* <img className="home-background" /> */}
            <div className="home__text">
                <p className="home__text-first">WELCOME TO MJ BEAT IT VOL. 2!</p>
                <p className="home__text-second">FEEL FREE TO FOLLOW OUR SPONSORS</p>
            </div>
            <div className="home__logo-container">
                <div className="home__logo">
                    <img src={cardenLogo} className="home__logo-img" />
                    <p className="home__logo-text">Carden SG <br></br>(@carden.sg)</p>
                </div>
                <div className="home__logo">
                    <img src={mamadiamLogo} className="home__logo-img" />
                    <p className="home__logo-text">Mama Diam <br></br>(@mamadiam.prinsep)</p>
                </div>
                <div className="home__logo">
                    <img src={artistateLogo} className="home__logo-img" />
                    <p className="home__logo-text">Artistate <br></br> (@artistatesg)</p>
                </div>
                <div className="home__logo">
                    <img src={heinekenLogo} className="home__logo-img" />
                    <p className="home__logo-text">Heineken <br></br>(@heinekensg)</p>
                </div>
            </div>
            {/* <div className="home__telegram-container">
                <div className="home__text home__text-third">
                    <p>Have you joined d'Battleground's telegram channel?</p>
                </div>
                <img src={dbgTeleLogo} className="home__logo-img" />
            </div> */}
        </div>
    )
}

export default Home
