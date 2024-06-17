import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import "../CSS/Login.css"
import LoginImage from "../assets/login_Image.png"


export default function Login(props) {
    const setIsLoggedIn = props.setIsLoggedIn;
    // State to manage visibility of password field
    const [showPassword, setShowPassword] = useState(false);
    // Hook to navigate to different routes
    const navigate = useNavigate();

    // State to manage form data
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // Handler to update form data on input change
    function changeHandler(event) {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    // Handler to handle form submission
    async function submitHandler(e) {
        e.preventDefault();

        // Create a user object with form data
        const user = {
            email: formData.email,
            password: formData.password,
        };

        try {
            // Send POST request to backend to authenticate user
            const response = await fetch("http://localhost:2003/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user), // Convert user object to JSON string
            });

            const data = await response.json(); // Parse JSON response from backend

            // Handle response from backend
            if (data.success) {
                toast.success("Login Success");
                setIsLoggedIn(true); // Update login state
                navigate("/"); // Navigate to home page after successful login
            } else {
                toast.error(data.message || "Invalid email or password");
            }
        } catch (error) {
            toast.error("Failed to login");
        }
    }

    return (
        <div className="login-w-full login-h-full">
            <div className="login-flex-center">
                <div className="login-form-container">
                    <div className="login-form-content">
                        <h1 className="login-form-title">
                            Sign in to your account
                        </h1>

                        {/* Login form */}
                        <form onSubmit={submitHandler} className="login-form">
                            <div className='login-label'>
                                <label className="login-label-text">
                                    <p>
                                        Your email
                                        <sup className="login-text-pink-600">*</sup>
                                    </p>
                                    <input
                                        onChange={changeHandler}
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        className="login-input"
                                        placeholder="John@gmail.com"
                                        required />
                                </label>
                            </div>

                            <div className='login-label login-relative'>
                                <label htmlFor="password" className="login-label-text relative">
                                    <p>
                                        Password
                                        <sup className="login-text-pink-600">*</sup>
                                    </p>
                                    <input
                                        onChange={changeHandler}
                                        type={showPassword ? "text" : "password"}
                                        value={formData.password}
                                        name="password"
                                        placeholder="••••••••"
                                        className="login-input"
                                        required />
                                    <span onClick={() => setShowPassword(!showPassword)} className="login-eye-icon">
                                        {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#e95014' /> : <AiOutlineEye fontSize={24} fill='#e95014' />}
                                    </span>
                                </label>
                            </div>

                            <button className="login-signin-button">
                                Sign in
                            </button>

                            <p className="login-signup-link">
                                Don’t have an account yet?
                                <NavLink to="/signup"> Sign up</NavLink>
                            </p>
                        </form>
                    </div>
                </div>
                <div>
                    {/* Login image */}
                    <img src={LoginImage} alt="" className='login-img' />
                </div>
            </div>
        </div>
    )
}
