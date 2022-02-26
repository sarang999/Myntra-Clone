import React from 'react';
// import{  useParams } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Products } from "../components/ProductsPage/products.jsx";
import { WomensProducts } from "../components/ProductsPage/WomenProducts.jsx";
import { Header } from '../components/header/Header.jsx';
import { Home } from '../components/home/Home.jsx';
import { Footer } from '../components/footer/Footer.jsx';
import { MobileNumber } from "../components/Login/mobilenumber";
import { Otp } from "../components/Login/otp";
import { Verified } from "../components/Login/verified";
import { WishlistMainPage } from "../components/wishlist/mainwishlist";
import { Signup } from "../components/Signup/signup";
import { Entermobile } from "../components/Login/usernamelogin";
import { Bag } from '../components/Bag/Bag.jsx';
import { Address } from '../components/Address/Address.jsx';
import { Payment } from '../components/Payment/Payment.jsx';
import { UserDetails } from "../components/Login/userdetails";
import { Productdeatils } from "../components/productDetails/Productdetails";
// import { WomensProducts } from "../components/ProductsPage/WomenProducts";
import { Men } from '../components/mens_women/mens.js';
import { Women } from "../components/mens_women/women.js";
export const MyRoutes = () => {
    // let { id } = useParams();
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
                <Route path="/womensproducts" element={<WomensProducts />}></Route>
                <Route path="/cart" element={<Bag />}></Route>
                <Route exact path="/login/userdetails" element={<UserDetails />}></Route>
                <Route exact path="/wishlist" element={<WishlistMainPage/>}></Route>
                <Route path="/address" element={<Address />}></Route>
                <Route path="/payment" element={<Payment />}></Route>
                <Route path="/productsdetails/:id" element={<Productdeatils />}></Route>
                <Route exact path="/menhomepage" element={<Men />} ></Route>
                <Route exact path="/womenhomepage" element={<Women/>} ></Route>
            </Routes>
            <Footer />

        </div>
    )
}

// export default Routes
