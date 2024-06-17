import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start" style={{ backgroundColor: '#000000', color: 'white' }}>

        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{ borderBottomColor: 'white' }}>

          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="https://www.facebook.com/TalentGroGlobal" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} color="#3b5998" />
            </a>
            <a href="https://www.instagram.com/talentgro_global/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} color="#E4405F" />
            </a>
            <a href="https://www.linkedin.com/company/talentgro-global-pvt-ltd/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} color="#0077b5" />
            </a>
          </div>

        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>TalentGro Global
                </h6>
                <p>
                  We collaborate and deliver to enable Corporates, Educational Institutions, Students and Individuals to achieve their human resource goals. Our expertise lies in providing comprehensive Profile building to enhance personal and professional growth. 🚀
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="/about" target="blank" className="text-reset no-underline hover:underline">About us</a>
                </p>
                <p>
                  <a href="/contact" target="blank" className="text-reset no-underline hover:underline">Contact us</a>
                </p>
                <p>
                  <a href="/services" target="blank" className="text-reset no-underline hover:underline">Services</a>
                </p>
                <p>
                  <a href="#ourvision" target="blank" className="text-reset no-underline hover:underline">Our vision</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <div className="contact-information">
                  <FaLocationDot className='contact-icon' size={25} />
                  <p className="text-white">Savitry Enclave, 40 A/4, VIP Rd, Zirakpur, Punjab 140603</p>
                </div>
                <div className="contact-information">
                  <a href="mailto:Talentgroglobal@gmail.com" className="text-white">
                    <SiGmail className='contact-icon me-3 ' size={25} />
                    <p>Talentgroglobal@gmail.com</p>
                  </a>
                </div>
                <div className="contact-information">
                  <a href="tel:9179866 67827" className="text-white">
                    <FaPhoneAlt className='contact-icon me-3' size={25} />
                    <p>+91-7986667827</p>
                  </a>
                </div>
                <div className="contact-information">
                  <a href="tel:98888 77722" className="text-white">
                    <FaPhoneAlt className='contact-icon me-3' size={25} />
                    <p>+91-9888877722</p>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

        <div className="text-center p-4">
          <p>© 2024 TalentGro Global Pvt Ltd. All Rights Reserved.</p>
        </div>

      </footer>
    </>
  );
}

export default Footer;
