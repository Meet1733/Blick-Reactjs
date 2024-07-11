import React, { useEffect } from "react";
import "./css/Nav.css"
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "../assets/logo.svg";

function Nav() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="nav-logo" data-aos="fade-zoom-in">
            <img src={logo} alt="logo-img" />
        </div>
    )
}

export default Nav;