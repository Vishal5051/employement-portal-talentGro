import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css';
import "../CSS/Login.css"

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function changeHandler(event) {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    function submitHandler(e) {
        e.preventDefault();
        toast.success("Login Success");
        // navigate("/");
    }

    return (
        <div className="w-full h-full bg-[#e46e40] overflow-hidden">
            <div className="flex-center">
                <div className="form-container">
                    <div className="form-content">
                        <h1 className="form-title">
                            Sign in to your account
                        </h1>

                        <form onSubmit={submitHandler} className="form">
                            <div className='label'>
                                <label className="label-text">
                                    <p>
                                        Your email
                                        <sup className="text-pink-600">*</sup>
                                    </p>
                                    <input
                                        onChange={changeHandler}
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        className="input"
                                        placeholder="John@gmail.com"
                                        required />
                                </label>
                            </div>

                            <div className='label relative'>
                                <label htmlFor="password" className="label-text">
                                    <p>
                                        Password
                                        <sup className="text-pink-600">*</sup>
                                    </p>
                                    <input
                                        onChange={changeHandler}
                                        type={showPassword ? "text" : "password"}
                                        value={formData.password}
                                        name="password"
                                        placeholder="••••••••"
                                        className="input"
                                        required />
                                    <span onClick={() => setShowPassword(!showPassword)} className="eye-icon">
                                        {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                                    </span>
                                </label>
                            </div>

                            <button
                                className="button">
                                Sign in
                            </button>

                            <p className="signup-link">
                                Don’t have an account yet?
                                <NavLink to="/signup"> Sign up</NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}


