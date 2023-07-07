import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Blackjack from "./pages/blackjack/Blackjack";
import Uno from "./pages/uno/Uno";
import Suitpoints from "./pages/suitpoints/Suitpoints";
import Lineup from "./pages/lineup/Lineup";

const routes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/blackjack" element={<Blackjack/>} />
            <Route path="/uno" element={<Uno/>} />
            <Route path="/suitpoints" element={<Suitpoints/>} />
            <Route path="/lineup" element={<Lineup/>} />
        </Routes>
    )
}

export default routes
