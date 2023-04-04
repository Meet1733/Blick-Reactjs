import React from "react";
import "./css/App.css"
import Nav from "./Nav";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Review";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="first-page">
        <Nav/>
        <Row1/>
      </div>

      <div className="second-page">
        <Row2/>
      </div>

      <div className="third-page">
        <Row3/>
      </div>

      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
