import axios from 'axios'
import React, { useEffect, useState } from 'react';
import login_image from "./LoginImages/login_image.webp";
import "./login.css";
import { useDispatch, useSelector } from 'react-redux'
import {loginProcess} from "../../Redux/Login/Action"
import {Navigate} from "react-router-dom";
// import { useHistory } from "react-router-dom";
import MobilenumberForm from "../../firebase/mobileinputform";

export const  MobileNumber = () => {
    // let history = useHistory();
    const [mobile, setMobile] = useState("");
    const [userdetails, setUserdetails] = useState([]);
    const dispatch = useDispatch()
    const userAuth = useSelector(state => state.loginred.userAuth);

    useEffect(() => {
        getUser();
    }, []);

    const getUser=()=>{
        axios.get("https://ecommyntra-fake-server-app.herokuapp.com/users")
        .then(res=>{
            setUserdetails(res.data) 
        })
        .catch(err=> alert(err))
    }

    const handleLogin=()=>{
      dispatch(loginProcess(userdetails,mobile))
    }

    const handleChange=()=>{}

    return !userAuth?(
        <div className="logincontainer">
            <div className="logindiv">
                    <div className="loginpromo"> 
                    <img className="couponcode" src={login_image} alt="" /> 
                    </div>
                    <div className="inputcontainer">
                        <div>
                            <span className="heading">Login</span><span className="heading2">or</span><span className="heading1">Signup</span><br/>
                        <div className="inputdiv">
                            
                            {/* <input className="input1" type="text" value={`+91`}
                                
                                onChange={() => handleChange()}
                            /> */}
                            {/* enter from firebase */}
                            {/* <input onChange={(e) => setMobile(e.target.value)}
                            value={mobile} className="input2" type="text" placeholder="Mobile Number" /> */}

                            {/* <button className="loginbutton" onClick={() =>
                            { handleLogin() }}>CONTINUE
                            </button> */}
                            <MobilenumberForm/>

                            <p className="terms">By continuing, I agree to the <span className="conditions">Terms of Use</span> & <span className="conditions">Privacy Policy</span></p> 
                          
                            

                            <div className="verified-line">
                            <div><hr/></div>
                            <div>OR</div>
                            <div><hr/></div>
                        </div>
                            <h3>Sign In with Username</h3>

                          <button className='login-useername'>LOGIN WITH USERNAME</button>
                 
              
                            <p>Have trouble in logging in? <span className="conditions">Get help</span></p>
                            
                             </div>
                    </div>
                  
                    </div>
            </div>
        </div>
          
    )
        : (<Navigate to="" />)
}
