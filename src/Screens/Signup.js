import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-hot-toast";
import "../CSS/Signup.css"
import SignupImage from "../assets/signup-image.png"

export default function Signup() {
    const [accountType, setAccountType] = useState('student');
    // State to manage visibility of password fields
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    // Hook to navigate to different routes
    const navigate = useNavigate();

    // State to manage form data
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // Handler to update form data on input change
    function changeHandler(event) {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    // Handler to handle form submission
    function submitHandler(e) {
        e.preventDefault();
        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        console.log(formData);
        console.log(accountType);
        toast.success("Account Created");
        // Navigate to login page after successful signup
        navigate("/login");
    }

    return (
        <div className="w-full h-full">
            <div className="flex-center-signup">
                <div>
                    {/* Signup image */}
                    <img src={SignupImage} alt="" className='login-img-signup' />
                </div>
                <div className="form-container-signup">
                    {/* Account Type */}
                    <div className="account-type-container">
                        <button
                            onClick={() => setAccountType("student")}
                            className={`button ${accountType === "student" ? "button-student-active" : "button-student-inactive"
                                }`}>
                            Student
                        </button>
                        <button
                            onClick={() => setAccountType("employer")}
                            className={`button ${accountType === "employer" ? "button-employer-active" : "button-employer-inactive"
                                }`}>
                            Employer
                        </button>
                    </div>
                    <div className="form-content-signup">
                        <h1 className="form-title-signup">
                            {
                                accountType === "student" ? <span>Register your Student account</span> : <span>Register your Employer account</span>
                            }
                        </h1>

                        {/* Signup form */}
                        <form onSubmit={submitHandler} className="form-signup">
                            <div className="flex gap-x-4">
                                <div className='label-signup'>
                                    <label className="label-text-signup">
                                        <p>
                                            First Name <sup className="text-pink-600">*</sup>
                                        </p>
                                        <input
                                            onChange={changeHandler}
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            className="input-signup"
                                            placeholder="Enter First Name"
                                            required
                                        />
                                    </label>
                                </div>

                                <div className='label-signup'>
                                    <label className="label-text-signup">
                                        <p>
                                            Last Name <sup className="text-pink-600">*</sup>
                                        </p>
                                        <input
                                            onChange={changeHandler}
                                            name="lastName"
                                            type="text"
                                            value={formData.lastName}
                                            className="input-signup"
                                            placeholder="Enter Last Name"
                                            required
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className='label-signup'>
                                <label className="label-text-signup">
                                    <p>
                                        Your email
                                        <sup className="text-pink-600">*</sup>
                                    </p>
                                    <input
                                        onChange={changeHandler}
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        className="input-signup"
                                        placeholder="John@gmail.com"
                                        required />
                                </label>
                            </div>

                            <div className="flex gap-x-4">
                                <div className='label-signup'>
                                    <label htmlFor="password" className="label-text-signup relative">
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
                                            className="input-signup"
                                            required />
                                        <span onClick={() => setShowPassword(!showPassword)} className="eye-icon-signup">
                                            {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#e95014' /> : <AiOutlineEye fontSize={24} fill='#e95014' />}
                                        </span>
                                    </label>
                                </div>

                                <div className='label-signup '>
                                    <label htmlFor="password" className="label-text-signup relative">
                                        <p>
                                            Confirm Password
                                            <sup className="text-pink-600">*</sup>
                                        </p>
                                        <input
                                            onChange={changeHandler}
                                            type={showConfirmPass ? "text" : "password"}
                                            value={formData.confirmPassword}
                                            name="confirmPassword"
                                            placeholder="••••••••"
                                            className="input-signup"
                                            required />
                                        <span onClick={() => setShowConfirmPass(!showConfirmPass)} className="eye-icon-signup">
                                            {showConfirmPass ? <AiOutlineEyeInvisible fontSize={24} fill='#e95014' /> : <AiOutlineEye fontSize={24} fill='#e95014' />}
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <button
                                className="button-signup">
                                Sign up
                            </button>

                            <p className="login-link-signup">
                                Already have an Account
                                <NavLink to="/login"> Login </NavLink> here
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
