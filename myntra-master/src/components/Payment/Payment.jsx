import React from 'react'
import './Payment.css'
import GooglePayButton from "@google-pay/button-react"
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { deleteBagData, getBagData, patchBagData, patchBagSizesData } from '../../redux/Bag/action';
import { AddNav } from './AddNav'
import { Link } from 'react-router-dom';
export const Payment = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBagData())
        // setBagModel(false)

    }, [dispatch])
    const bagD = useSelector(state => state.bag.bagData)
    console.log(bagD)

    let totalAmount = 0
    bagD?.map((e) => totalAmount += Math.floor(Number(e.off_price) * ((100 - Number(e.discount)) / 100)))
    console.log(totalAmount);

    let totalMRP = 0
    bagD?.map((e) => totalMRP += Math.floor(Number(e.off_price)))
    console.log(totalMRP);

    let totalDiscount = totalMRP - totalAmount;
    console.log(totalDiscount);
    return (
        <div>
            <AddNav/>
            <div id="container">
                <div id="box1">
                    <div id="box1-1">
                        <h5><i className="fas fa-percent"></i> Bank Offer</h5>
                        <p>
                            10% Instant Discount with Standard Chartered Credit and Debit Cards
                            on a min spend of Rs 3,000. TCA
                        </p>
                        <h5 className="pink">Show More<i className="fas fa-chevron-down"></i></h5>
                    </div>
                    <h4 id="choose">Choose Payment Mode</h4>
                    <div id="box1-2">
                        <div id="box1-2-1">
                            <div id="box1-2-1-1">
                                <h5>
                                    <i className="fas fa-money-check-alt"></i> CASH ON DELIVERY
                                    (CASH/CARD/UPI)
                                </h5>
                            </div>
                            <div id="box1-2-1-2">
                                <h5><i className="far fa-credit-card"></i> CREDIT/DEBIT CARD</h5>
                            </div>
                            <div>
                                <h5>
                                    <i className="fab fa-google-pay"></i> PHONEPE/GOOGLEPAY/BHIM UPI
                                </h5>
                            </div>
                            <div>
                                <h5><i className="fas fa-wallet"></i> PAYTM/PAYZAPP/WALLETS</h5>
                            </div>
                            <div>
                                <h5><i className="fas fa-university"></i> NET BANKING</h5>
                            </div>
                            <div></div>
                        </div>
                        <div id="box1-2-2">
                            <h5>CREDIT/DEBIT CARD</h5>
                            <input type="text" id="cardname" placeholder="Card Number" />
                            <input type="text" id="name" placeholder="Name on card" />
                            <input type="text" id="valid" placeholder="Valid Thru(MM/YY)" />
                            <input type="text" id="cvv" placeholder="CVV" />
                            <div>
                                <input type="checkbox" id="checkbox" />
                                <span
                                >Save this card for faster payments
                                    <i className="fas fa-info-circle"></i
                                    ></span>
                            </div>
                            <button id="pink">PAY NOW</button>
                            <div className='gbtn'>
                                <GooglePayButton
                                    environment="TEST"
                                    paymentRequest={{
                                        apiVersion: 2,
                                        apiVersionMinor: 0,
                                        allowedPaymentMethods: [
                                            {
                                                type: 'CARD',
                                                parameters: {
                                                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                                },
                                                tokenizationSpecification: {
                                                    type: 'PAYMENT_GATEWAY',
                                                    parameters: {
                                                        gateway: 'example',
                                                        gatewayMerchantId: 'exampleGatewayMerchantId',
                                                    },
                                                },
                                            },
                                        ],
                                        merchantInfo: {
                                            merchantId: '12345678901234567890',
                                            merchantName: 'Demo Merchant',
                                        },
                                        transactionInfo: {
                                            totalPriceStatus: 'FINAL',
                                            totalPriceLabel: 'Total',
                                            totalPrice: '10.00',
                                            currencyCode: 'INR',
                                            countryCode: 'IN',
                                        },
                                    }}
                                    onLoadPaymentData={paymentRequest => {
                                        console.log('load payment data', paymentRequest);
                                    }}
                                    buttonType="pay"
                                    className="string"
                                />
                            </div>


                        </div>
                    </div>
                    <div id="box1-3">
                        <div id="box1-3-1">
                            <h4><i className="fas fa-gift"></i> Have A Gift Card?</h4>
                        </div>
                        <div id="box1-3-2"><p className="pink">Apply Gift Card</p></div>
                    </div>
                </div>
                <div>
                    <div className="fontBold font14 marginTop20">PRICE DETAILS ({bagD.length} Items)</div>
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

                    <Link to="/">
                    <div className="placeOrderBtn marginTop font14 fontBold cursor"
                        onClick={()=>{alert("Order has been Placed Successfully")}}
                        >PLACE ORDER</div>
                        </Link>

                </div>

            </div></div>
    )
}

