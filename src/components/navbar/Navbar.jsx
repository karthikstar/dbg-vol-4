import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="header__navbar">
            <NavLink exact="true" className={({isActive}) => isActive ? "header__navbar-link--active" : "header__navbar-link" } to="/eventflow">
                <p>Event Flow</p>
            </NavLink>
            <NavLink exact="true" className={({isActive}) => isActive ? "header__navbar-link--active" : "header__navbar-link" } to="/suitpoints">
                <p>Top 32 Point System</p>
            </NavLink>
            <NavLink exact="true" className={({isActive}) => isActive ? "header__navbar-link--active" : "header__navbar-link" } to="/lineup">
                <p>Battle Lineup</p>
            </NavLink>
        </div>
    )
}

export default Navbar
