
import './App.css';

import { MobileNumber }  from "./components/Login/mobilenumber";
import { Otp } from "./components/Login/otp";
import { Verified } from "./components/Login/verified";
import { UsernameLogin } from "./components/Login/usernamelogin";
import { Signup } from "./components/Signup/signup";
import { Routing } from "./Routing/routes";
function App() {
  return (
    <div className="App">
      myntra_login_signup_prod
      <MobileNumber />
      <Otp/>
      <Verified />
      <Signup/>
      <UsernameLogin />
      <Routing/>
    </div>
  );
}

export default App;
