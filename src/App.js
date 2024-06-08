import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./Screens/Home";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Services from "./Screens/Services";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";

function App() {

    return (
        <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route
                    path="/login"
                    element={<Login />}
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