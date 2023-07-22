import React from 'react'
import dbgIgLogo from '../../assets/dbg_ig.png'
import dhopsIgLogo from '../../assets/dhops_ig.png'
import dhopsYtLogo from '../../assets/dhops_yt.png'
import thriftIgLogo from '../../assets/thrift_ig.png'
import dbgBackground from '../../assets/dbg_background.png'
import dbgTeleLogo from '../../assets/dbg_tele.png'
import './home.css'

const Home = () => {
    return (
        <div className="home">
            <img src={dbgBackground} className="home-background" />
            <div className="home__text">
                <p className="home__text-first">WELCOME!!</p>
                <p className="home__text-second">FEEL FREE TO FOLLOW OUR SOCIALS</p>
            </div>
            <div className="home__logo-container">
                <div className="home__logo">
                    <img src={dbgIgLogo} className="home__logo-img" />
                    <p className="home__logo-text">d'Battleground IG</p>
                </div>
                <div className="home__logo">
                    <img src={dhopsIgLogo} className="home__logo-img" />
                    <p className="home__logo-text">NUS d'Hoppers IG</p>
                </div>
                <div className="home__logo">
                    <img src={dhopsYtLogo} className="home__logo-img" />
                    <p className="home__logo-text">NUS d'Hoppers Youtube</p>
                </div>
                <div className="home__logo">
                    <img src={thriftIgLogo} className="home__logo-img" />
                    <p className="home__logo-text">Thrifthoppers IG</p>
                </div>
            </div>
            <div className="home__telegram-container">
                <div className="home__text home__text-third">
                    <p>Have you joined d'Battleground's telegram channel?</p>
                </div>
                <img src={dbgTeleLogo} className="home__logo-img" />
            </div>
        </div>
    )
}

export default Home
