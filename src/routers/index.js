import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../screens/home'
import Events from '../screens/events'


function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Routers