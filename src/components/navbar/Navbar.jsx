import React from 'react';
import { NavLink } from 'react-router-dom';
import Blackjack from "../../pages/blackjack/Blackjack";
import Uno from "../../pages/uno/Uno";
import Suitpoints from "../../pages/suitpoints/Suitpoints";
import Lineup from "../../pages/lineup/Lineup";
import './navbar.css';

const Navbar = () => {
    return (
        <div className="header__navbar">
            <NavLink exact className={({isActive}) => isActive ? "header__navbar-link--active" : "header__navbar-link" } to="/blackjack">
                <p>Blackjack Poker Gameplay</p>
            </NavLink>
            <NavLink exact className={({isActive}) => isActive ? "header__navbar-link--active" : "header__navbar-link" } to="/uno">
                <p>Uno Advantages</p>
            </NavLink>
            <NavLink exact className={({isActive}) => isActive ? "header__navbar-link--active" : "header__navbar-link" } to="/suitpoints">
                <p>Top 32 Point System</p>
            </NavLink>
            <NavLink exact className={({isActive}) => isActive ? "header__navbar-link--active" : "header__navbar-link" } to="/lineup">
                <p>Battle Lineup</p>
            </NavLink>
        </div>
    )
}

export default Navbar
