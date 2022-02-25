import React from 'react'
import './Payment.css'
import GooglePayButton from "@google-pay/button-react"

export const Payment = () => {
    return (
        <div>

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
                                    (CAH/CARD/UPI)
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
                            <button id="pink" onclick="paynow()">PAY NOW</button>
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
                <div id="box2">
                    <div id="box1-2-3">
                        <h5 id="totalitems">PRICE DETAILS(0 item)</h5>
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
            </div></div>
    )
}

