
import { useEffect, useState } from "react";
import axios from "axios";
import "../Login/login.css";
import { Navigate, Link } from "react-router-dom";
import "../Login/login.css";
export const Signup = () => {
    
    const [details, setDetails] = useState({
        userdetails: "",
        email: "",
        mobile: "",
        number:"",
    });

    const handleChange = (e) => {
        const { name } = e.target;
        setDetails({ ...details, [name]: e.target.value });
    };

    function postUsers(e) {
        e.preventDefault();
       //https://ecommyntra-fake-server-app.herokuapp.com/users
        axios.post("https://ecommyntra-fake-server-app.herokuapp.com/users", details)
            .then(function (res) {
                // fetchData();
            
            }).catch(function (err) {
                console.log(err);
            });
    }
    // useEffect(()=>{
    //     fetchData();
    // }, []);
    // const [forMap, setMap] = useState([]);
    // function fetchData(){
    //     axios.get("https://ecommyntra-fake-server-app.herokuapp.com/users")
    //         .then((res) => setMap(res.data))
    //         .catch(function (err) {
    //             console.log(err);
    //         });
    // };

    return (
        <div className="signup">
           
            <div className="signup-main">
                <h3>Complete your Sign Up</h3>
                <form className="signup-form" onSubmit={(e) => {
                  
                    alert("Confirm for submitting");
                    postUsers(e);
                }}>
                
                    <input type="text" placeholder="Enter your name" name="userdetails" onChange={handleChange} />
                    
                    <input type="email" placeholder="Enter your email" name="email" onChange={handleChange}  />
                    
                    <input type="password" placeholder="Create password" name="mobile" onChange={handleChange} />

                    <input type="number" maxLength="10" placeholder="Enter Phone Number" name="number" onChange={handleChange} />
                    
                    <input className="signup-submit" type="submit" value="CREATE ACCOUNT"/>
                    
                </form>
                <Link to="/loginwithusername">
                    <button className="send-to-username">Click here to Login</button>
                </Link>
                <p>Have trouble in logging in? <span className="conditions">Get help</span></p>
            </div>
        </div>
    )
}