import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import "../CSS/Login.css"
import LoginImage from "../assets/login_Image.png"
import { FcGoogle } from "react-icons/fc";
import { auth, provider, signInWithPopup } from "../components/firebase";

export default function Login(props) {
  const setIsLoggedIn = props.setIsLoggedIn;
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

  async function submitHandler(e) {
    e.preventDefault();

    const user = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch("http://localhost:2003/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Login Success");
        setIsLoggedIn(true);
        navigate("/");
      } else {
        toast.error(data.message || "Invalid email or password");
      }
    } catch (error) {
      toast.error("Failed to login");
    }
  }

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      toast.success("Account Created");
      navigate("/login"); // Navigate to login page after successful signup
    } catch (error) {
      console.error(error);
      toast.error("Failed to sign in with Google");
    }
  };
  return (
    <div className="login-w-full login-h-full">
      <div className="login-flex-center">
        <div className="login-form-container">
          <div className="login-form-content">
            <h1 className="login-form-title">
              Sign in to your account
            </h1>

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
              <div className="flex w-full items-center justify-center my-4 gap-x-2">
                <div className="h-[1px] w-full bg-primary-color"></div>
                <p className="font-medium text-primary-color leading-[1.375rem] mb-0">
                  OR
                </p>
                <div className="h-[1px] w-full bg-primary-color"></div>
              </div>

              <button onClick={signInWithGoogle} className='button-signup-google'>
                <FcGoogle size={20} />
                <span>Continue with google</span>
              </button>
              <p className="login-signup-link">
                Don’t have an account yet?
                <NavLink to="/signup"> Sign up</NavLink>
              </p>
            </form>
          </div>
        </div>
        <div>
          <img src={LoginImage} alt="" className='login-img' />
        </div>
      </div>
    </div>
  )
}