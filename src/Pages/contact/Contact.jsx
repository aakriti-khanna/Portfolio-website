import React, { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaMapMarker,
  FaInstagram,
} from "react-icons/fa"; // Correct imports

import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./Contact.css";
import A from "../../Assets/call.png";
import C from "../../Assets/mail.png";

const SERVICE_ID = "service_x28hgwg";
const TEMPLATE_ID = "template_ybz6kgx";
const PUBLIC_KEY = "9VXHWx1fIRCOdMo8L";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.init(PUBLIC_KEY);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      }
    );
    e.target.reset();
  };

  return (
    <section className="contact-section">
      <div className="contact-bg">
        <h3>Get in Touch with Us</h3>
        <h2>contact us</h2>
        <div className="line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="text flex flex-wrap">
          <p>We are here to assist you with any questions or concerns.</p>
        </div>
      </div>
     

      <div className="section1">
        <div className="container">
          <motion.div
            className="contactInfo"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2>Contact Info</h2>
              <ul className="info">
                <a href="https://www.google.com/maps/place/1,+Sama-Savli+Rd,+BSNL+Colony,+Karelibagh,+Vadodara,+Gujarat+390002/@22.337618,73.204826,16z/data=!4m6!3m5!1s0x395fcf2296e2134d:0xeee6cdcb2b3ea73b!8m2!3d22.3376176!4d73.2048262!16s%2Fg%2F11jyyrc7_h?hl=en&entry=ttu">
                  <li>
                    <span>
                      <FaLocationDot
                        size={32}
                        style={{ color: "white", fontWeight: "bold" }}
                      />
                    </span>
                    <span>
                      204, Siddharth Annex-1
                      <br />
                      Sama Savli Road Near
                      <br />
                      M.S. School <br />
                      Vadodara-390008 Gujarat.
                    </span>
                  </li>
                </a>

                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfmqsCJFXVMwslkgkXGbfhjtKjXtnCFfJWRZqRPQMKmnqtwmLgtBgkFkmrCmdwXpkgXWqq">
                  <li>
                    <span>
                      <img src={C} alt="Mail Icon" />
                    </span>
                    <span className="mt-3">accrual.edge01@gmail.com</span>
                  </li>
                </a>
                <a href="tel:+91 9825313900">
                  <li>
                    <span>
                      <img src={A} alt="Call Icon" />
                    </span>
                    <span className="mt-3">+91 9825313900</span>
                  </li>
                </a>
              </ul>
            </div>
            <ul className="sci">
              <li>
                <a href="https://www.facebook.com/nassosanagn/">
                  <FaFacebookF
                    size={32}
                    style={{ color: "white", fontWeight: "bold" }}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/nassosanagn_/?hl=el">
                  <BsInstagram
                    size={32}
                    style={{ color: "white", fontWeight: "bold" }}
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/nassosanagn">
                  <FaTwitter
                    size={32}
                    style={{ color: "white", fontWeight: "bold" }}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nassos-anagnostopoulos-2b9631196/">
                  <FaLinkedin
                    size={32}
                    style={{ color: "white", fontWeight: "bold" }}
                  />
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="contactForm"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Send Message</h2>
            <form className="formBox" onSubmit={handleOnSubmit}>
              <div className="inputBox w50">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <span>First Name</span>
              </div>
              <div className="inputBox w50">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <span>Last Name</span>
              </div>
              <div className="inputBox w50">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span>Email Address</span>
              </div>
              <div className="inputBox w50">
                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
                <span>Mobile Number</span>
              </div>
              <div className="inputBox w100">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <span>Write your message here...</span>
              </div>
              <div className="inputBox w100">
                <input type="submit" value="Send" />
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="map">
        <motion.div
          className="map"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.423766780158!2d73.20021277210073!3d22.33762249661043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf2296e2134d%3A0xeee6cdcb2b3ea73b!2s1%2C%20Sama-Savli%20Rd%2C%20BSNL%20Colony%2C%20Karelibagh%2C%20Vadodara%2C%20Gujarat%20390002!5e0!3m2!1sen!2sin!4v1716277964087!5m2!1sen!2sin"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </motion.div>
      </div>

      <div className="icons mb-4">
        <h1 className="text-center pb-5 text-4xl">Stay Connected with us</h1>
        <div className="social-icons flex">
          <div className="social-icon">
            <a href="https://www.facebook.com/">
              <FaFacebookF size={40} />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://twitter.com/">
              <FaTwitter size={40} />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.linkedin.com/">
              <FaLinkedin size={40} />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.instagram.com/">
              <FaInstagram size={40} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

function ParentCompo() {
  return (
    <div className="parent-component">
      {/* Other content */}
      <ContactPage /> {/* Calling the ContactPage component */}
    </div>
  );
}

export default ParentCompo;
