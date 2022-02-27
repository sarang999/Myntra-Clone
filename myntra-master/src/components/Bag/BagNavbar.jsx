import React from "react";
import "./BagNavbar.css";
import logo from "../Images/myntra-logo.png";
import image3 from "../Images/image3.png";

export const BagNavbar = () => {
  return (
    <div id="nav">
      <div>
        <img id="logo" src={logo} alt="" />
      </div>
      <div id="nav-2">
        <span id="blue">
          <div>BAG &ensp;</div>
          <div id="blueline"></div>
        </span>
        <span> --------- ADDRESS --------- PAYMENT</span>
      </div>
      <div id="checkdiv">
        <img src={image3} alt="" />
      </div>
    </div>
  );
};
