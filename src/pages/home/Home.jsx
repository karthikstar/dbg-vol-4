import React from 'react'
import dbgIgLogo from '../../assets/dbg_ig.png'
import dhopsIgLogo from '../../assets/dhops_ig.png'
import dhopsYtLogo from '../../assets/dhops_yt.png'
import thriftIgLogo from '../../assets/thrift_ig.png'
import './home.css'

const Home = () => {
    return (
        <div className="home">
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
        </div>
    )
}

export default Home
