import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import logo from '../../assets/mj_logo.png';
import './header.css';

const Header = () => {
    return (
        <div className="header gradient__bg">
            <div className="header__logotitle">
                <div className="header__logotitle-logo">
                    <NavLink className="navbar-item" to="/" exact="true">
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                <div className="header__logotitle-title">
                    Beat IT Vol. 2
                </div>
            </div>
            <div className="header__navbar">
                <Navbar />
            </div>
        </div>
    )
}

export default Header
