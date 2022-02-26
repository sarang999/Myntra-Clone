import React from 'react';
import firebase from './firebase';
import { Link } from "react-router-dom";
import "../components/Login/login.css";

class OtpVerification extends React.Component {
  handleChange = (e) =>{
      const { name, value } = e.target;
    this.setState({
      [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
    onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    //console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
        alert("Mobile Number Verified! Click on CONTINUE");
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }
  render() {
    return (
      <div>

        <form onSubmit={this.onSubmitOTP}>
          <input className='otpverification-input' type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
          <button className='otpverification-button' type="submit">Submit</button>
        </form>
        <Link to="/otpverified">
          <button className='verify-otp-check'>CONTINUE</button>
          </Link>
      </div>
    )
  }
}
export default OtpVerification;
