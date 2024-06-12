import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import "../CSS/contact.css";
import { toast } from "react-hot-toast";

const Contact = () => {

    // Handler to handle form submission
    function submitHandler(e) {
        e.preventDefault();
        // Display success message
        toast.success("Message sent successfully");
        // Navigate to home page after successful submission
    }

    return (
        <div>
            <div className='flex items-center justify-center'>
                <div className="contact-container">
                    <span className="contact-big-circle"></span>

                    <div className="contact-form-container">
                        <div className="contact-info">
                            <h3 className="contact-title">Let's get in touch</h3>
                            <p className="contact-text">Whether you have a question, simply want to connect.</p>
                            <p>Feel free to send me a message in the contact form</p>
                            <div className="">
                                <div className="contact-information">
                                    <FaLocationDot className='contact-icon' size={25} />
                                    <p>Savitry Enclave, 40 A/4, VIP Rd, Zirakpur, Punjab 140603</p>
                                </div>
                                <div className="contact-information">
                                    <SiGmail className='contact-icon' size={25} />
                                    <p>Talentgroglobal@gmail.com</p>
                                </div>
                                <div className="contact-information">
                                    <FaPhoneAlt className='contact-icon' size={25} />
                                    <p>+91 79866 67827</p>
                                </div>
                            </div>
                            <div className="contact-social-media">
                                <p>Connect with us :</p>
                                <div className="contact-social-icons">
                                    <a href="https://www.facebook.com/TalentGroGlobal"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FaFacebookSquare />
                                    </a>
                                    <a href="https://www.instagram.com/talentgro_global/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FaSquareInstagram />
                                    </a>
                                    <a href="https://www.linkedin.com/company/talentgro-global-pvt-ltd/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FaLinkedin />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-contact-form">
                            <span className="contact-circle contact-one"></span>
                            <span className="contact-circle contact-two"></span>

                            <form onSubmit={submitHandler} className="contact-form">
                                <h3 className="contact-title">Contact us</h3>
                                <div className="contact-input-container">
                                    <label htmlFor="contact-username"></label>
                                    <input type="text" name="name" className="contact-input" id="contact-username" placeholder='Username'/>
                                </div>
                                <div className="contact-input-container">
                                    <input type="email" name="email" className="contact-input" id="contact-email" placeholder='Email'/>
                                    <label htmlFor="contact-email"></label>

                                </div>
                                <div className="contact-input-container">
                                    <input type="file" name="image" className="contact-input" id="contact-image" />
                                    <label htmlFor="contact-image"></label>
                                </div>
                                <div className="contact-input-container contact-textarea">
                                    <textarea name="message" className="contact-input" id="contact-message" placeholder='Message'></textarea>
                                </div>
                                <input type="submit" value="Send" className="contact-btn" />
                                <div id="contact-form-message" className="contact-form-message"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;