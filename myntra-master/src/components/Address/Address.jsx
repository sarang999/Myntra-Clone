import React from 'react'
import { AddNav } from './AddNav'
import "./Address.css";
import {Link} from "react-router-dom"



export const Address=()=> {
    return (
        <div>
            <AddNav />
            <div id="container">
                <div id="box1">
                    <div id="box1-1">
                        <h5>CONTACT DETAILS</h5>
                        <input type="text" id="name" placeholder="Name*" />
                        <input type="number" id="moile" placeholder="Mobile No*" />
                        <h5>ADDRESS</h5>
                        <input type="text" id="pincode" placeholder="Pin Code*" />
                        <input
                            type="text"
                            id="address"
                            placeholder="Address(House No, Building, Street, Area)*"
                        />
                        <input type="text" id="town" placeholder="Locality / Town*" />
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
                        <input type="checkbox" id="checkbox"  />
                        <span>Make this my default address</span>
                    </div>

                    <div id="pinkbtn">
                        <Link to="/payment"><button >ADD ADDRESS</button></Link>
                    </div>
                </div>
                <div id="box2">
                    <div id="box1-2-3">
                        <h5 id="totalitems">PRICE DETAILS</h5>
                        <table>
                            <tr>
                                <td>Total MRP</td>
                                <td id="totalMRP">₹</td>
                            </tr>
                            <tr>
                                <td>Discount on MRP</td>
                                <td id="discountMRP"><span className="green">-₹</span></td>
                            </tr>

                            <tr>
                                <td>Convenienve Fee <span className="pink">Know More</span></td>
                                <td>
                                    <div>
                                        <span className="linethrough">₹99</span>
                                        <span className="green">FREE</span>
                                    </div>
                                </td>
                            </tr>
                            <tr id="totalamount">
                                <td>Total Amount</td>
                                <td id="totalamount2">₹</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

