
import "./login.css";

import MobilenumberForm from "../../firebase/mobileinputform";
export const Entermobile = () => {
    

    return  (

        <div className="username-login">

            <div className="username-login-main">

                <h3>Enter Mobile Number</h3>

                <form className="username-form">
                
                    <MobilenumberForm/>

                </form>

                <p>Have trouble in logging in? <span className="conditions">Get help</span></p>
            </div>
        </div>
    ) 
};
