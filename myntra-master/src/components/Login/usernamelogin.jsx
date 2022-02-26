
import "./login.css";
import { Link , useNavigate} from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginProcess } from "../../redux/Login/Action";
import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";

export const UsernameLogin = () => {
    const navigate = useNavigate();
    const [mobile, setMobile] = useState("");
    const [userdetails, setUserdetails] = useState([]);
    const dispatch = useDispatch();
    const userAuth = useSelector(state => state.loginred.userAuth);
    // const history = useHistory();
    const getUser = () => {
        // https://masai-project.herokuapp.com/users
        axios.get("https://ecommyntra-fake-server-app.herokuapp.com/users")
            .then(res => {
                setUserdetails(res.data)
            })
            .catch(err => alert(err)
            )
    }

    useEffect(() => {
        getUser()
    }, []);
    const handleLogin = () => {
        dispatch(loginProcess(userdetails, mobile));
        navigate('/');
    };

    return !userAuth ? (

        <div className="username-login">

            <div className="username-login-main">

                <h3>Login with Username</h3>

                <form className="username-form">
                
                    <input type="text" placeholder="Enter your username" name="username"
                        onChange={(e) => setMobile(e.target.value)} value={mobile}
                    />
                    <input type="password" placeholder="Enter your password" name="password"
                        onClick={() => { handleLogin() }}
                    //;history.go(-1)
                    />
                
                    <Link to="/"><input className="username-submit" type="submit" value="LOGIN" /></Link>
                    
                </form>

                <p>Have trouble in logging in? <span className="conditions">Get help</span></p>
            </div>
        </div>
    ) : ( navigate('/'));
};
// <Redirect to="/login/userdetails" />