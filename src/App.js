import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/about";
import Contact from "./Screens/contact";
import Services from "./Screens/services";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Navbar from "./components/Navbar"

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="w-screen h-screen flex-col ">
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route
                    path="/login"
                    element={<Login setIsLoggedIn={setIsLoggedIn} />}
                />
                <Route
                    path="/signup"
                    element={<Signup />}
                />
            </Routes>
           
        </div>
    );
}

export default App;