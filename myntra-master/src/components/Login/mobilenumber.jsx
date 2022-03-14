import axios from "axios";
import React, { useEffect, useState } from "react";
import login_image from "./LoginImages/login_image.webp";
import "./mobilenumber.css";
import { useDispatch, useSelector } from "react-redux";
import { loginProcess } from "../../redux/Login/Action";
import { Link, useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

export const MobileNumber = () => {
  let navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [userdetails, setUserdetails] = useState([]);
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.loginred.userAuth);

  useEffect(() => {
    getUser();
  }, []);
  const getUser = () => {
    //https://ecommyntra-fake-server-app.herokuapp.com/users
    //https://masai-project.herokuapp.com/users
    axios
      .get("https://ecommyntra-fake-server-app.herokuapp.com/users")
      .then((res) => {
        setUserdetails(res.data);
      })
      .catch((err) => alert(err));
  };

  const handleLogin = () => {
    dispatch(loginProcess(userdetails, mobile));
  };

  return !userAuth ? (
    <div className="logincontainer">
      <div className="logindiv">
        <div className="loginpromo">
          <img className="couponcode" src={login_image} alt="" />
        </div>
        <div className="inputcontainer">
          <div>
            <span className="heading">Login</span>
            <span className="heading2">with</span>
            <span className="heading1">Mobile Number</span>
            <br />
            <div className="inputdiv">
              <input className="input1" type="text" value={`+91`} />
              {/* enter from firebase */}
              <input
                onChange={(e) => setMobile(e.target.value)}
                required
                value={mobile}
                className="input2"
                type="text"
                placeholder="Mobile Number"
              />

              <button
                className="loginbutton"
                onClick={() => {
                  handleLogin();
                }}
              >
                CONTINUE
              </button>
              {/* <MobilenumberForm/> */}

              <p className="terms">
                By continuing, I agree to the{" "}
                <span className="conditions">Terms of Use</span> &{" "}
                <span className="conditions">Privacy Policy</span>
              </p>

              <div className="verified-line">
                <div>
                  <hr />
                </div>
                <div>OR</div>
                <div>
                  <hr />
                </div>
              </div>
              <h3>Click below for Signup</h3>
              <Link to="/entermobilenumber">
                {" "}
                <button className="login-username">REGISTER NOW</button>
              </Link>

              <p>
                Have trouble in logging in?{" "}
                <span className="conditions">Get help</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <> {navigate("/login/userdetails")}</>
  );
};
