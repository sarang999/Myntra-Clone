import React from 'react';
import couponIcon from "../Images/couponIcon.png";
import giftImage from "../Images/giftImage.png"
import "./BagNavbar.css"
import { Link } from "react-router-dom"

// import { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';


export const Apply = () => {
    // const history = useHistory()
    const bagData = useSelector(state => state.bag.bagData)

    let totalAmount = 0
    bagData?.map((e) => totalAmount += Math.floor(Number(e.off_price) * ((100 - Number(e.discount)) / 100)))
    // console.log(totalAmount);

    let totalMRP = 0
    bagData?.map((e) => totalMRP += Math.floor(Number(e.off_price)))
    // console.log(totalMRP);

    let totalDiscount = totalMRP - totalAmount;
    // console.log(totalDiscount);
    return (
        <div>
            <div className="fontBold font14">
                COUPONS
            </div>
            <div className="coupon">
                <div>
                    <img src={couponIcon} alt="" width="22px" />
                </div>
                <div>Apply Coupons</div>
                <div>APPLY</div>
            </div>
            <div className="marginTop borderBottom">
                <div className="fontBold font14 marginTop20">GIFTING AND PERSONILISATION</div>
                <div className="marginTop ">
                    <img src={giftImage} alt="" width="100%" />
                </div>
            </div>
            <div>
                <div className="fontBold font14 marginTop20">PRICE DETAILS ({bagData.length} Items)</div>
                <div className="priceFlex marginTop">
                    <div>Total MRP</div>
                    <div>₹{totalMRP}</div>
                </div>
                <div className="priceFlex lineHeight">
                    <div>Discount on MRP</div>
                    <div className="teal">-₹{totalDiscount}</div>
                </div>
                <div className="priceFlex lineHeight">
                    <div>Coupon Discount</div>
                    <div className="pink cursor">Apply Coupon</div>
                </div>
                <div className="priceFlex borderBottom lineHeight">
                    <div>Convenience Fee
                        <span className="pink fontBold cursor" > Know More</span>
                    </div>
                    <div>
                        <span className="lineThrough">₹99</span>
                        <span className="teal"> FREE</span>
                    </div>
                </div>
                <div className="priceFlex marginTop fontBold">
                    <div>Total Amount</div>
                    <div>₹{totalAmount}</div>
                </div>
                <Link to="/address"> <div className="placeOrderBtn marginTop font14 fontBold cursor " >PLACE ORDER</div></Link>

            </div>
        </div>
    );
};

