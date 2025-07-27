import React, { useState } from "react";
import "./Nav.css";
import logo from "../../Assets/logo.jpeg";
import { FaHome, FaInfoCircle, FaBriefcase, FaComments } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    console.log("hello");
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/" className="logo-link">
            <img src={logo} alt="Logo" />
            <h1 className="white-link" style={{ fontSize: "2rem" }}>
              AccrualEdge
            </h1>
          </a>
        </div>
        {/* {/* <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <span className="text-white navDescription">
          <a href="/" className="white-link">
            <h1> AccrualEdge</h1>

            {/* <h4 className="text-sm">A Step Towards Quality</h4> */}
        {/* </a>
        </span>  */}
        <ul className={`nav-links ${isNavOpen ? "nav-active" : ""}  text-xl`}>
          <li>
            <a href="./">
              {/* <FaHome /> */}
              <span>Home</span>
            </a>
          </li>

          {/* <li className="dropdown">
            <a href="#">
              <FaBox />
              <span>About us </span>
              <RiArrowDropDownLine />
            </a>
            <div className="dropdown-content">
              <a href="/Silicasand">Silica</a>
              <a href="./Quartz">Quartz</a>
            </div>
          </li> */}

          <li>
            <a href="./About">
              {/* <FaInfoCircle /> */}
              <span>About us </span>
            </a>
          </li>
          {/* <li className="dropdown">
            <a href="#">
              <FaCog />
              <span>Services </span> <RiArrowDropDownLine />
            </a>
            <div className="dropdown-content">
              <a href="./Mining">Mining</a>
              <a href="./Processing">Processing</a>
              <a href="./Quality">Quality Check</a>
            </div>
          </li> */}
          <li>
            <a href="./Service">
              {/* <FaBriefcase /> */}
              <span>Services</span>
            </a>
          </li>
          <li>
            <a href="./Contact">
              {/* <BsFillTelephoneFill /> */}
              <span>Contact</span>
            </a>
          </li>
          <li>
            <a href="./NewFeed">
              {/* <FaComments /> */}
              <span>Feedback</span>
            </a>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
