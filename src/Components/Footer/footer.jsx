import React from "react";
import {
  RiYoutubeFill,
  RiInstagramLine,
  RiFacebookFill,
  RiLinkedinFill,
  RiPhoneFill,
  RiMapPin2Fill,
} from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import "./footer.css"; // Import CSS for styling
// import mainL from "../../assets/mainlogo1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section__container2 footer__container">
        <div className="footer__col">
          <div className="mainlogo footer__logo">
            {/* <img src={mainL} alt="Main Logo" /> */}
          </div>
          <p className="section__description1">
            Silica Floor Industries is your trusted partner for high-quality
            minerals that cater to various industries.
          </p>
          <ul className="footer__socials">
            <li>
              <a href="#">
                <RiYoutubeFill />
              </a>
            </li>
            <li>
              <a href="#">
                <RiInstagramLine />
              </a>
            </li>
            <li>
              <a href="#">
                <RiFacebookFill />
              </a>
            </li>
            <li>
              <a href="#">
                <RiLinkedinFill />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h3 className="py-2 text-white">Quick Links</h3>
          <ul className="footer__links">
            <li>
              <a href="./">Home</a>
            </li>
            <li>
              <a href="./About">About</a>
            </li>
            <li>
              <a href="./Silicasand">Product</a>
            </li>
            <li>
              <a href="./Mining">Operations</a>
            </li>
            <li>
              <a href="./Contact">Contact</a>
            </li>
            <li>
              <a href="./NewFeed">Feedback</a>
            </li>
          </ul>
        </div>
        <div className="footer__col ">
          <h3 className="text-white py-2 footerContact text-left">
            Contact Us
          </h3>
          <ul className="footer__links ">
            <li className="flex ">
              <span>
                <RiPhoneFill />
              </span>
              <div>
                <h5>Phone No</h5>
                <a href="tel:+919825313900">
                  <p>+91 9825313900</p>
                </a>
              </div>
            </li>
            <li className="flex ">
              <span>
                <IoMdMail />
              </span>

              <div>
                <h5>Email Id</h5>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfmqsCJFXVMwslkgkXGbfhjtKjXtnCFfJWRZqRPQMKmnqtwmLgtBgkFkmrCmdwXpkgXWqq">
                  <p>accrual.edge01@gmail.com</p>
                </a>
              </div>
            </li>
            <li className="flex">
              <span>
                <RiMapPin2Fill />
              </span>
              <div>
                <h5>Location</h5>
                <a href="https://www.google.com/maps/place/1,+Sama-Savli+Rd,+BSNL+Colony,+Karelibagh,+Vadodara,+Gujarat+390002/@22.3388758,73.2018648,18z/data=!4m6!3m5!1s0x395fcf2296e2134d:0xeee6cdcb2b3ea73b!8m2!3d22.3376241!4d73.2048336!16s%2Fg%2F11jyyrc7_h?hl=en&entry=ttu">
                  <p>
                    204, Siddharth Annex-1 Sama Savli Road Near M.S. School
                    Vadodara-390008 Gujarat.
                  </p>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2023 All rights reserved. ||
        <a href="https://www.softapper.com/index.html">
          {" "}
          <span className="text-gray-400 ">Made By SOFTAPPER</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
