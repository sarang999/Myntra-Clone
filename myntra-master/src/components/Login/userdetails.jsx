import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./userdetails.css";
import user_icon from "./LoginImages/user_icon.png";
// import imageuser from "../Navbar/navimages/user.png"
import { logoutReq } from "../../redux/Login/Action";

export const UserDetails = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const phoneNumber = useSelector((state) => state.loginred.phoneNumber);
  const email = useSelector((state) => state.loginred.email);
  const userAuth = useSelector((state) => state.loginred.userAuth);
  const username = useSelector((state) => state.loginred.username);

  const handleLogout = () => {
    alert(`${username} do you want to logout?`);
    dispatch(logoutReq());
  };

  return userAuth ? (
    <div className="userdetails-main">
      <div className={"afterlogin"}>
        <div>
          <img className={"imgfirework"} src={user_icon} alt="" />
        </div>
        <div className="userdetails-subdiv">
          <h1>Hi,{username}</h1>
          <h5>Email : {email}</h5>
          <h5>Contact:+91 {phoneNumber}</h5>
        </div>
      </div>

      <h2 className="happy-shop">Happy Shopping !!</h2>
      <button className={"loginbutton1"} onClick={() => navigate("/")}>
        Continue
      </button>
      <br />
      <button className={"loginbutton2"} onClick={() => handleLogout()}>
        Logout
      </button>
    </div>
  ) : (
    <>{navigate("/login")}</>
  );
};
