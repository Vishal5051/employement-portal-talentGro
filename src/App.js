import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/about";
import Contact from "./Screens/contact";
import Services from "./Screens/services";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";

function App() {
    return (
        <div className="w-screen h-screen flex-col ">
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