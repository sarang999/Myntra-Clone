
import { Route, Routes } from "react-router";

import { MobileNumber } from "../components/Login/mobilenumber";
import { Otp } from "../components/Login/otp";
import { Verified } from "../components/Login/verified";
import { Wishlist } from "../components/wishlist/wishlist";
import { Signup } from "../components/Signup/signup";
import { UsernameLogin } from "../components/Login/usernamelogin";
export const Routing = () => {
    

    return (
        <div>
            
      {/* <UsernameLogin /> */}
            <Routes>
                <Route exact path="/" element={<MobileNumber/>}></Route>
                <Route exact path='/otpverification' element={<Otp />}></Route>
                <Route exact path="/otpverified" element={ <Verified />}></Route>
                <Route exact path="/signupform" element={<Signup />}></Route>
                <Route exact path="/loginwithusername" element={<UsernameLogin/>}></Route>
                
          </Routes>
        </div>
    )
}