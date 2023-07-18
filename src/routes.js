import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Eventflow from "./pages/eventflow/Eventflow";
import Suitpoints from "./pages/suitpoints/Suitpoints";
import Lineup from "./pages/lineup/Lineup";

const routes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/eventflow" element={<Eventflow/>} />
            <Route path="/suitpoints" element={<Suitpoints/>} />
            <Route path="/lineup" element={<Lineup/>} />
        </Routes>
    )
}

export default routes
