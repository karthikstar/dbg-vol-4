import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import logo from '../../assets/dbg_logo.png';
import './header.css';

const Header = () => {
    return (
        <div className="header gradient__bg">
            <div className="header__logotitle">
                <div className="header__logotitle-logo">
                    <NavLink className="navbar-item" activeClassName="is-active" to="/" exact>
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                <div className="header__logotitle-title">
                    d'Battleground Vol.4
                </div>
            </div>
            <div className="header__navbar">
                <Navbar />
            </div>
        </div>
    )
}

export default Header
