import React from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/footer"
const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center'>
                
                Home Page 
            </div>
            <Footer/>
        </div>
    );
};

export default Home;