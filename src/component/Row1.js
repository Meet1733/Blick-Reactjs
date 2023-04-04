import React from "react";
import "./css/Row1.css";

function Row1() {
    return (
        <div className="row1">
            <div className="row-left">
                <h1 className="row-above">A way to track your</h1>
                <h1 className="row-below">finances</h1>
                <p className="row-small">The easy way to stay on top of your finances, no matter where you are.</p>
                <button>Get Started</button>
            </div>     
            <div className="row-right">
                <img className="phone" src="https://assets.zyrosite.com/YyvylKbrrJt35wVE/mockup_1-AzGzyBl0Grt0gagr.png" alt="phone-img"/>
            </div>
        </div>
    )
}

export default Row1;