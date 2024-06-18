import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-hot-toast";
import "../CSS/Signup.css";
import SignupImage from "../assets/signup-image.png";
import { FcGoogle } from "react-icons/fc";
import { auth, provider, signInWithPopup } from "../components/firebase";

export default function Signup() {
  const [accountType, setAccountType] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const user = {
      userType: accountType === "student" ? 1 : 2,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch("http://localhost:2003/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();

      if (data.success) {
        toast.success("Account Created");
        navigate("/login");
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to create account");
    }
  }
  
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);

      // const user = {
      //   userType: accountType === "student" ? 1 : 2, // Assuming 1 for student and 2 for employer
      //   firstName: result.user.displayName,
      //   lastName: result.user.displayName,
      //   email: result.user.email,
      //   password: result.user.uid,
      // };
      // console.log(user);
      // try {
      //   // Send POST request to backend to save user data
      //   const response = await fetch("http://localhost:2003/signup", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(user), // Convert user object to JSON string
      //   });

      //   const data = await response.json(); // Parse JSON response from backend

      //   // Handle response from backend
      //   if (data.success) {
      //     toast.success("Account Created");
      //     navigate("/login"); // Navigate to login page after successful signup
      //   } else {
      //     toast.error(data.message || "Something went wrong");
      //   }
      // } catch (error) {
      //   toast.error("Failed to create account");
      // }
    } catch (error) {
      console.error(error);
      toast.error("Failed to sign in with Google");
    }
  };
  return (
    <div className="w-full h-full">
      <div className="flex-center-signup">
        <div>
          <img src={SignupImage} alt="" className='login-img-signup' />
        </div>
        <div className="form-container-signup">
          <div className="account-type-container">
            <button
              onClick={() => setAccountType("student")}
              className={`button ${accountType === "student" ? "button-student-active" : "button-student-inactive"}`}>
              Student
            </button>
            <button
              onClick={() => setAccountType("employer")}
              className={`button ${accountType === "employer" ? "button-employer-active" : "button-employer-inactive"}`}>
              Employer
            </button>
          </div>
          <div className="form-content-signup">
            <h1 className="form-title-signup">
              {accountType === "student" ? <span>Register your Student account</span> : <span>Register your Employer account</span>}
            </h1>
            <form onSubmit={submitHandler} className="form-signup">
              <div className="name-signup">
                <div className='label-signup'>
                  <label className="label-text-signup">
                    <p>First Name <sup className="text-pink-600">*</sup></p>
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
                    <p>Last Name <sup className="text-pink-600">*</sup></p>
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
                  <p>Your email <sup className="text-pink-600">*</sup></p>
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
              <div className="name-signup">
                <div className='label-signup'>
                  <label htmlFor="password" className="label-text-signup relative">
                    <p>Password <sup className="text-pink-600">*</sup></p>
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
                <div className='label-signup'>
                  <label htmlFor="password" className="label-text-signup relative">
                    <p>Confirm Password <sup className="text-pink-600">*</sup></p>
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
              <button className="button-signup">Sign up</button>

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
