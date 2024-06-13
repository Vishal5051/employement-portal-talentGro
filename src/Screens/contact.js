import React, { useState, useRef } from 'react';
import { FaLinkedin, FaSquareInstagram, FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../CSS/contact.css";
import { toast } from "react-hot-toast";

const Contact = () => {
    const initialFormData = {
        name: '',
        email: '',
        image: null,
        message: ''
    };
    const [formData, setFormData] = useState(initialFormData);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(initialFormData);  // Reset form data after submission
        if (fileInputRef.current) {
            fileInputRef.current.value = "";  // Clear the file input
        }
        toast.success("Message sent successfully");
    };

    return (
        <div className='flex items-center justify-center'>
            <div className="contact-container">
                <span className="contact-big-circle"></span>

                <div className="contact-form-container">
                    <div className="contact-info">
                        <h3 className="contact-title">Let's get in touch</h3>
                        <p className="contact-text">Whether you have a question or simply want to connect, feel free to send me a message using the contact form below.</p>
                        <div className="contact-information">
                            <FaLocationDot className='contact-icon' size={25} />
                            <p>Savitry Enclave, 40 A/4, VIP Rd, Zirakpur, Punjab 140603</p>
                        </div>
                        <div className="contact-information">
                            <a href="mailto:Talentgroglobal@gmail.com">
                                <SiGmail className='contact-icon' size={25} />
                                <p>Talentgroglobal@gmail.com</p>
                            </a>
                        </div>
                        <div className="contact-information">
                            <a href="tel:9179866 67827">
                                <FaPhoneAlt className='contact-icon' size={25} />
                                <p>+91-7986667827</p>
                            </a>
                        </div>


                        <div className="contact-social-media">
                            <p>Connect with us:</p>
                            <div className="contact-social-icons">
                                <a href="https://www.facebook.com/TalentGroGlobal" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookSquare />
                                </a>
                                <a href="https://www.instagram.com/talentgro_global/" target="_blank" rel="noopener noreferrer">
                                    <FaSquareInstagram />
                                </a>
                                <a href="https://www.linkedin.com/company/talentgro-global-pvt-ltd/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-contact-form">
                        <span className="contact-circle contact-one"></span>
                        <span className="contact-circle contact-two"></span>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <h3 className="contact-title">c us</h3>
                            <div className="contact-input-container">
                                <input
                                    type="text"
                                    name="name"
                                    className="contact-input"
                                    placeholder='Username'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact-input-container">
                                <input
                                    type="email"
                                    name="email"
                                    className="contact-input"
                                    placeholder='Email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact-input-container">
                                <input
                                    type="file"
                                    name="image"
                                    className="contact-input"
                                    ref={fileInputRef}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="contact-input-container contact-textarea">
                                <textarea
                                    name="message"
                                    className="contact-input"
                                    placeholder='Message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <input type="submit" value="Send" className="contact-btn" />
                            <div id="contact-form-message" className="contact-form-message"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;