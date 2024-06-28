import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from "../components/footer";
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true; // Setting Axios to send credentials globally

function Home() {
    const [name, setName] = useState(''); // State for storing name
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        axios.get('http://localhost:2003/')
        .then(res => {
            if (res.data.valid) {
                setName(res.data.email); // Set name if valid response
                console.log("Cookie exists: ", document.cookie);
            } else {
                navigate('/login'); // Redirect to login if not valid
            }
            console.log(res);
        })
        .catch(err => console.log(err));   
    }, [navigate]); // Adding navigate to the dependency array to avoid warning

    return (    
        <div>
            <div className='flex items-center justify-center'>      
                {name ? `Welcome, ${name}` : "Home Page"}
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
