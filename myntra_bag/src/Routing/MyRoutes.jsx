import React from 'react'
import { Route, Routes } from "react-router";
// import Home from '../Components/Homepage/Home';
// import Login from '../Components/Login/Login';
// import MensMainPage from '../Components/MenPage/MensMainPage';
// import Navbar from '../Components/Navbar/Navbar';
// import WishlistMainPage from '../Components/WishlistPage/WishlistMainPage';
// import { TShirtMainPage } from '../Components/T-Shirt/TshirtMainPage';
// import UserDetails from "../Components/Login/UserDetails"
import { Bag } from '../components/Bag/Bag.jsx';
import { BagNavbar } from '../components/Bag/BagNavbar.jsx';
import { Address } from '../components/Address/Address.jsx';
import { Payment } from '../components/Payment/Payment.jsx';
// import OrderPlaced from "../Components/BagPage/OrderPlaced.jsx";
// import ProductDetails from '../Components/ProductDetails/ProductDetails';

export const MyRoutes = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <Routes>
                <Route path="/" element={<BagNavbar />}></Route>
                {/* <Route path="/men" exact>
                    <MensMainPage/>
                </Route>

                <Route path="/login" exact>
                    <Login/>
                </Route>
                <Route path="/login/userdetails">
                    <UserDetails/>
                </Route>
                <Route path="/wishlist" exact>
                    <WishlistMainPage/>
                </Route>
                <Route path="/result" exact>
                    <TShirtMainPage/>
                </Route>
                <Route path="/login/userdetails">
                    <UserDetails/>
                </Route> */}
                <Route path="/cart" element={<Bag />}></Route>
                <Route path="/address" element={ <Address />}></Route>
                <Route path="/payment" element={ <Payment/>}></Route>

            </Routes>

        </div>
    )
}

// export default Routes
