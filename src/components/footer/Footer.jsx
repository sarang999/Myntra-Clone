import React from 'react'
 import gstore from "./images/gstore.png";
 import apple from "./images/apple.png"
 import Social from "./images/Social.png"
 import Guarantee from "./images/Guarantee.png"

export const Footer = () => {
    const footer1=[
        {title:"ONLINESHOPPING",
        sub:["Men","Women","Kids","Home & Living","Beauty","Gift Cards"]},
        {title:"USEFUL LINKS",
        sub:["Contact Us","FAQ","T&C","Terms of Use","Track Order","Shipping","Cancellation","Returns","Whitehat","Blog"]},
    ]

    return (
        <div>
            <div className="Footerclass">
                {footer1.map((item,j)=><div key={j} className="Footerclassdiv1">
                   <h5 className="colorblack">{item.title}</h5>
                        {item.sub.map((el,z)=><p key={z}>{el}</p>)}
                    </div>)}
                <div  className="Footerclassdiv2">
                    <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
                     <div>
                        <img className="footericon1" src={gstore} alt="" />
                        <img className="footericon2" src={apple} alt="" />
                    </div>
                    <h5>KEEP IN TOUCH</h5>
                    <img src={Social} alt="" />
                </div>
                <div>
                    <img className="footer4" src={Guarantee} alt="" />
                </div>
            </div>
            <div className="footer5">
            <p>In case of any concern,<span className="footerspan">Contact Us</span></p>
            <p>© 2021 www.myntra.com. All rights reserve</p>
            </div>      
        </div>
    )
}

