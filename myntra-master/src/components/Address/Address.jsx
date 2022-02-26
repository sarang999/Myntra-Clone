import React from 'react'
import { AddNav } from './AddNav'
import "./Address.css";
import { Link } from "react-router-dom"

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { deleteBagData, getBagData, patchBagData, patchBagSizesData } from '../../redux/Bag/action';


export const Address = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBagData())
        // setBagModel(false)

    }, [dispatch])
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
            <AddNav />
            <div id="container">
                <div id="box1">
                    <div id="box1-1">
                        <h5>CONTACT DETAILS</h5>
                        <input type="text" id="name" placeholder="Name*" /><br></br>
                        <input type="number" id="moile" placeholder="Mobile No*" />
                        <h5>ADDRESS</h5>
                        <input type="text" id="pincode" placeholder="Pin Code*" />
                        <br></br>
                        <input
                            type="text"
                            id="address"
                            placeholder="Address(House No, Building, Street, Area)*"
                        />
                        <br></br>

                        <input type="text" id="town" placeholder="Locality / Town*" />
                        <br></br>
<input
                            type="text"
                            id="city"
                            className="input"
                            placeholder="City / District*"
                        />
                        <input type="text" id="state" className="input" placeholder="State*" />
                        <h5>SAVE ADDRESS AS</h5>
                        <div id="box1-1-1">
                            <div id="pink">Home</div>
                            <div>Work</div>
                        </div>
                        
                    </div>

                    <div >
                        <Link to="/payment"><button id="pinkbtn">ADD ADDRESS</button></Link>
                    </div>
                </div>

                <div className='mydivv'>
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
                    {/* <div className="placeOrderBtn marginTop font14 fontBold cursor" >PLACE ORDER</div> */}

                </div>

            </div>
        </div>
    )
}

