import React from 'react'
import firebase from './firebase'
import "../components/Login/login.css";
class MobilenumberForm extends React.Component {
  handleChange = (e) =>{
    const {name, value } = e.target
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
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
            //console.log("OTP has been sent")
            alert("OTP has been to your Mobile Number");
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
            alert("Check your Mobile Number");
            //console.log("SMS not sent");
        });
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSignInSubmit}>
                <div id="sign-in-button"></div>
                <input className="input1" type="text" value={`+91`} />
          <input className='numberform-input' type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
          <button className='numberform-button' type="submit">Submit</button>
        </form>

      </div>
    )
  }
}
export default MobilenumberForm;
