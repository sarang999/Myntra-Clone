import "./login.css";
import otp from "./LoginImages/otp.jpg";
import OtpVerification from "../../firebase/otpinputform";

export const Otp = () => {
  return (
    <div className="otp">
      <div className="otp-white">
        <div className="otp-main">
          <img src={otp} alt="verify" />
          <h2>Verify with OTP</h2>

          {/* Enter from fire base */}
          {/* <input placeholder="Enter your otp here" /> */}
          <OtpVerification />
        </div>
        <div className="otp-trouble">
          <p>
            Have trouble in logging in?{" "}
            <span className="conditions">Get help</span>
          </p>
        </div>
      </div>
    </div>
  );
};
