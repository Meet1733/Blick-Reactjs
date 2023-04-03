import React from "react";
import "./css/Review.css";

function Review() {
    return (
        <div className="main-div">

            <div className="up">
                <p className="ul1">REVIEWS</p>
                <p className="ul2">What do they say?</p>
            </div>

            <div className="down">

                <div className="left">
                    <img src="https://assets.zyrosite.com/YyvylKbrrJt35wVE/client_1-YbN5DPpnlMHbBOlN.png" alt="rev1-img"/>
                    <div className="ltxt">
                        <p className="l1">Easy to use</p>
                        <p className="l2">I've used all of the personal finance apps on the market, and found that most have a hard time syncing my various bank accounts and cards real-time, leaving me guessing sometimes for days. Blick was a pleasant surprise! The team has really worked hard to ensure instant syncronization with most of the mainstream banks and lenders. Impressed! </p>
                        <p className="l3">- Anna Jenkins</p>
                    </div>
                </div>

                <div  className="right">
                    <img src="https://assets.zyrosite.com/YyvylKbrrJt35wVE/client_2-Y4LgEjNy3VikGNOb.png" alt="rev2-img" />
                    <div className="rtxt">
                        <p className="l1">Amazed by great results!</p>
                        <p className="l2">I rely on my budgeting spreadsheet since it helps me organize my spending data into meaningful charts and tables. That's why I've been comprehensive about switching to a personal finance app, as I found that the data presentation was usually lacking at best. Lo and behold, Blick was the only app that made the cut!</p>
                        <p className="l3">- Danny Lores</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Review