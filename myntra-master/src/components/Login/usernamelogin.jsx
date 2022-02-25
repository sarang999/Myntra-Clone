
import "./login.css";
import {Link} from "react-router-dom"
export const UsernameLogin = () => {

    return (

        <div className="username-login">

            <div className="username-login-main">

                <h3>Login with Username</h3>

                <form className="username-form">
                
                    <input type="text" placeholder="Enter your username" name="username" />
                    <input type="password" placeholder="Enter your password" name="password" />
                
                    {/* <Link to="/"> */}
                    <input className="username-submit" type="submit" value="LOGIN" />
                    {/* </Link> */}
                    
                </form>

                <p>Have trouble in logging in? <span className="conditions">Get help</span></p>
            </div>
        </div>
    );
};
