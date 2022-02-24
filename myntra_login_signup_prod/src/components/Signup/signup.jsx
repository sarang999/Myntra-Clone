

import "../Login/login.css";

export const Signup = () => {

    return (
        <div className="signup">
           
            <div className="signup-main">
                <h3>Complete your Sign Up</h3>
                <form className="signup-form">
                
                    <input type="text" placeholder="Enter your name" name="yourname" />
                    
                    <input type="email" placeholder="Enter your email" name="email" />
                    
                    <input type="password" placeholder="Create password" name="password" />

                    <input type="number" placeholder="Enter Phone Number" name="number" />
                    
                    <input className="signup-submit" type="submit" value="CREATE ACCOUNT" />
                    
                </form>
                  
                <p>Have trouble in logging in? <span className="conditions">Get help</span></p>
            </div>
        </div>
    )
}