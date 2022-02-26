import React from 'react'
import { Route, Routes } from "react-router";
import { Products } from "../components/ProductsPage/products.jsx";
import { WomensProducts } from "../components/ProductsPage/WomenProducts.jsx";
import { Header } from '../components/header/Header.jsx';
import { Home } from '../components/home/Home.jsx';
import { Footer } from '../components/footer/Footer.jsx';
import { MobileNumber } from "../components/Login/mobilenumber";
import { Otp } from "../components/Login/otp";
import { Verified } from "../components/Login/verified";
import { Wishlist } from "../components/wishlist/wishlist";
import { Signup } from "../components/Signup/signup";
import { Entermobile } from "../components/Login/usernamelogin";
import { Bag } from '../components/Bag/Bag.jsx';
import { Address } from '../components/Address/Address.jsx';
import { Payment } from '../components/Payment/Payment.jsx';

export const MyRoutes = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route exact path="/login" element={<MobileNumber />}></Route>
                <Route exact path='/otpverification' element={<Otp />}></Route>
                <Route exact path="/otpverified" element={<Verified />}></Route>
                <Route exact path="/signupform" element={<Signup />}></Route>
                <Route exact path="/entermobilenumber" element={<Entermobile />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/womensPage" element={<WomensProducts />}></Route>
                <Route path="/cart" element={<Bag />}></Route>
                <Route path="/address" element={<Address />}></Route>
                <Route path="/payment" element={<Payment />}></Route>

            </Routes>
            <Footer />

        </div>
    )
}

// export default Routes
