import React from "react";
import "./css/Footer.css";
import Gt from '@mui/icons-material/GitHub';
import Ld from '@mui/icons-material/LinkedIn';
import Ig from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <div className="footer-maindiv">
            <div className="lft">
                <img src="https://assets.zyrosite.com/YyvylKbrrJt35wVE/logo_black-AE0xqKEXpLtVQXnM.svg" alt="logo-img"/>
                <p className="lft-l1">Making your finances easy.</p>
                <p className="lft-l2">Privacy policy</p>
                <p className="lft-l3">Terms & Conditions</p>
                <div className="lft-icon">
                    <a href="/"><Gt/></a>
                    <a href="/"><Ld/></a>
                    <a href="/"><Ig/></a>
                </div>
            </div>

            <div className="rht">
                <p className="rht-l1">Subscribe to our newsletter</p>
                <form>
                    <p>Email address</p>
                    <input type="email" placeholder="Your email address"></input>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Footer