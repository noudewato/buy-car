import React, { useState } from "react";
import {Link} from 'react-scroll'
import "./navbar.scss";
import { BsFillCarFrontFill, BsMenuUp } from "react-icons/bs";
import { AiFillCloseCircle, AiOutlineUser } from "react-icons/ai";
import { LuSunMoon } from "react-icons/lu";

const Navbar = () => {

  const [nav, setNav] = useState("nav")
  const [Navbar, setNavbar] = useState("Navbar");

  const addbg = () => {
    if (window.scrollY >= 20) {
       setNavbar("Navbar addbg");
    } else {
       setNavbar("Navbar");
    }
  }

  window.addEventListener('scroll', addbg)

  const showNav = () => {
    setNav("nav showNav")
  }

  const closeNav = () => {
    setNav("nav");
  };
  return (
    <div className={Navbar}>
      <div className="logoDiv">
        <a href="" className="logoLink">
          <BsFillCarFrontFill className="logoIcon" />
          <span className="logoTitle">Hummos</span>
        </a>
      </div>

      <div className={nav}>
        <ul className="navMenu active">
          <li className="listItem">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="itemLink"
            >
              Home
            </Link>
          </li>

          <li className="listItem">
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="itemLink"
            >
              About
            </Link>
          </li>

          <li className="listItem">
            <Link
              to="Trending"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="itemLink"
            >
              Trending
            </Link>
          </li>

          <li className="listItem">
            <Link
              to="Service"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="itemLink"
            >
              Service
            </Link>
          </li>

          <li className="listItem">
            <Link
              to="Auction"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="itemLink"
            >
              Auction
            </Link>
          </li>
          <div className="closeMenu" onClick={closeNav}>
            <AiFillCloseCircle className="closemenuIcon" />
          </div>
        </ul>
      </div>

      <div className="navIcons">
        <div className="profileDiv">
          <AiOutlineUser className="profileIcon" />
        </div>
        <div className="switchDiv">
          <LuSunMoon className="switchIcon" />
        </div>
        <div className="openDiv" onClick={showNav}>
          <BsMenuUp className="openIcon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
