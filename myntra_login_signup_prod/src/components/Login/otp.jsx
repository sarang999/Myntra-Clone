
import "./login.css";
import otp  from "./LoginImages/otp.jpg";

export const Otp = () => {
    
    return (
        <div className="otp">

            <div className="otp-white">
            <div className="otp-main">
                <img src={otp} alt="verify" />
                <h3>Verify with OTP</h3>
                <input placeholder="Enter your otp here" type="number" />
            </div>
              <div className="otp-trouble">
                <p>Have trouble in logging in? <span className="conditions">Get help</span></p>
                </div>
                </div>
        </div>
    )
};
