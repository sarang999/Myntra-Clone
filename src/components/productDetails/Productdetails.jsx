import {Box, makeStyles} from "@material-ui/core";
import StarIcon from '@mui/icons-material/Star';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';




const useStyle = makeStyles({

    container: {
        marginTop: '6%'
    },
    
    main: {
        width: '99%',
        border: '1px solid black',
        display: 'flex'
    },

    flexDiv:{
        width: '49%',
        border: '1px solid blue'
       

    },
    star:{
        transform: 'scale(0.7)',
        verticalAlign: 'text-bottom',
        color: 'teal'
    },

    button: {
         /* Green */
        border: '1px solid grey',
        padding: 20,
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '29',
        fontWeight:"bolder",
        margin: '4px',
        cursor: 'pointer',
        borderRadius: '65%',
        backgroundColor: 'white',
        marginRight: '20px'
      },

      big1:{
          width: "35%",
          margin: "5% 10%",
          textAlign: "center",
          backgroundColor: 'red',
          padding: '2%',
          color: 'white',
          borderRadius: '5px',
          border: 'none'
      },

      big2:{

        width: "25%",
        margin: "5% 10%",
        textAlign: "center",
        padding: '2%',
        backgroundColor: 'white',
        borderRadius: '5px',
        border: '1px solid grey'

      },
      bag: {
          color: "white",
          verticalAlign: 'text-bottom',
      },
      pin:{
          width: "45%",
          marginTop: '20px',
          height: "50px",
          borderRadius: '5px',
          border: "solid grey"
      },
      similar:{
          display: 'flex',
          width:'100%'
      },

      imgs: {
          width: '15.90%',
          marginLeft: "10px",
          border: '1px solid grey'
      },

      imgSize: {
          width:'100%'
      }
     





})



export const Productdeatils = () => {

    const classes = useStyle()
    return(
            <Box className={classes.container}>
                
                <div>
                    <p>
                       Home/Clothing/Women Clothing/Dresses/ <span style={{fontWeight: "bolder"}}>SASSAFRAS Dresses/More By SASSAFRAS</span>
                    </p>

                    <div className={classes.main}>
                         <div className={classes.flexDiv}>
                             
                         </div>
                         
                         
                         <div className={classes.flexDiv}>
                             <h2>SASSAFRAS</h2>
                             <h3 style={{color: 'grey', fontWeight:'lighter'}}>Black & Pink Floral Printed Wrap Dress</h3>
                             <p>4.4 <StarIcon  className={classes.star}/>|13.8k Ratings</p>
                             <hr/>
                             <h3>Rs. 815 <span style={{textDecoration: "line-through", color: 'grey', fontWeight:"lighter"}}>Rs.2399</span><span style={{color: 'red'}}> (66% OFF)</span></h3>
                             <h6 style={{color: 'teal'}}>inclusive of all taxes</h6>

                             <h4>SELECT <span style={{color: 'red'}}>SIZESIZE CHART </span></h4>

                             <div>
                             <button className={classes.button} >XS</button>
                             <button className={classes.button}>S</button>
                             <button className={classes.button}>M</button>
                             <button className={classes.button}>L</button>
                             <button className={classes.button}>XL</button>
                             </div>

                             <button className={classes.big1}><ShoppingBagIcon className={classes.bag}/>ADD TO BAG</button>
                             <button className={classes.big2}><FavoriteBorderOutlinedIcon style={{verticalAlign: 'text-bottom'}}/>WISHLIST</button>
                             <h3>DELIVERY OPTIONS<span><LocalShippingOutlinedIcon style={{verticalAlign: 'text-bottom'}}/></span></h3>
                             <input placeholder="Enter A PIN code" className={classes.pin}/>
                             <h6>Please enter PIN code to check delivery time & Pay on Delivery Availability</h6>
                             <p>100% Original Products</p>
                             <p>Pay on delivery might be available</p>
                             <p>Easy 30 days returns and exchanges</p>
                             <p>Try & Buy might be available</p>

                             <h3>BEST OFFERS <span><LocalOfferOutlinedIcon style={{verticalAlign: 'text-bottom'}}/></span></h3>
                             <h4>Best Price: Rs. 615</h4>
                             <li>Applicable on: Orders above Rs. 799 (only on first purchase)</li>
                             <li>Coupon code: HELLO200</li>
                             <li>Coupon Discount: Rs. 200 off (check cart for final savings)</li>
                             <h6 style={{color: 'red'}}>View Eligible Products</h6>
                             <h4>Get additional offer</h4>
                             <p>Buy this style and unlock additional 10% off on a selected catalogue.</p>
                             <h6 style={{color: 'red'}}>View Products</h6>
                             <h4>EMI option available</h4>
                             <li>EMI starting from Rs.39/month</li>
                             <h6 style={{color: 'red'}}>View Plan</h6>
                             <hr/>
                             <h3>PRODUCT DETAILS<span><EventNoteOutlinedIcon style={{verticalAlign: 'text-bottom'}}/></span></h3>
                             <p>Black and pink printed woven wrap dress with tie-up detail, has a v-neck, three-quarter sleeves, concealed zip closure, an attached lining, and flared hem</p>
                             <h3>Material & Care</h3>
                             <p>100% polyester</p>
                             <p>Machine-wash</p>
                         </div>
                         
                    </div>

                    <div>
                             <h3>SIMILAR PRODUCTS</h3>
                             <div className={classes.similar}>
                                 <div className={classes.imgs}>
                                 <img className={classes.imgSize} src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/10555740/2019/9/4/9895a8a7-c979-4efc-915d-196085d1026d1567579564836-Nayo-Women-Dresses-7681567579563996-1.jpg"/>
                                 <h4>Nayo</h4>
                                 <p>Floral A line dress</p>
                                 <h5>Rs. 714 <span style={{textDecoration: "line-through", color: 'grey', fontWeight:"lighter"}}>Rs. 1299</span> <span style={{color: 'red'}}>(66% 0ff)</span></h5>
                                 </div>

                                 <div className={classes.imgs}>
                                 <img className={classes.imgSize} src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/10555740/2019/9/4/9895a8a7-c979-4efc-915d-196085d1026d1567579564836-Nayo-Women-Dresses-7681567579563996-1.jpg"/>
                                 <h4>Nayo</h4>
                                 <p>Floral A line dress</p>
                                 <h5>Rs. 714 <span style={{textDecoration: "line-through", color: 'grey', fontWeight:"lighter"}}>Rs. 1299</span> <span style={{color: 'red'}}>(66% 0ff)</span></h5>
                                 </div>

                                 <div className={classes.imgs}>
                                 <img className={classes.imgSize} src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/10555740/2019/9/4/9895a8a7-c979-4efc-915d-196085d1026d1567579564836-Nayo-Women-Dresses-7681567579563996-1.jpg"/>
                                 <h4>Nayo</h4>
                                 <p>Floral A line dress</p>
                                 <h5>Rs. 714 <span style={{textDecoration: "line-through", color: 'grey', fontWeight:"lighter"}}>Rs. 1299</span> <span style={{color: 'red'}}>(66% 0ff)</span></h5>
                                 </div>

                                 <div className={classes.imgs}>
                                 <img  className={classes.imgSize} src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/10555740/2019/9/4/9895a8a7-c979-4efc-915d-196085d1026d1567579564836-Nayo-Women-Dresses-7681567579563996-1.jpg"/>
                                 <h4>Nayo</h4>
                                 <p>Floral A line dress</p>
                                 <h5>Rs. 714 <span style={{textDecoration: "line-through", color: 'grey', fontWeight:"lighter"}}>Rs. 1299</span> <span style={{color: 'red'}}>(66% 0ff)</span></h5>
                                 </div>

                                 <div className={classes.imgs}>
                                 <img className={classes.imgSize} src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/10555740/2019/9/4/9895a8a7-c979-4efc-915d-196085d1026d1567579564836-Nayo-Women-Dresses-7681567579563996-1.jpg"/>
                                 <h4>Nayo</h4>
                                 <p>Floral A line dress</p>
                                 <h5>Rs. 714 <span style={{textDecoration: "line-through", color: 'grey', fontWeight:"lighter"}}>Rs. 1299</span> <span style={{color: 'red'}}>(66% 0ff)</span></h5>
                                 </div>

                                 <div className={classes.imgs}>
                                 <img className={classes.imgSize} src="https://assets.myntassets.com/f_webp,h_560,q_90,w_420/v1/assets/images/10555740/2019/9/4/9895a8a7-c979-4efc-915d-196085d1026d1567579564836-Nayo-Women-Dresses-7681567579563996-1.jpg"/>
                                 <h4>Nayo</h4>
                                 <p>Floral A line dress</p>
                                 <h5>Rs. 714 <span style={{textDecoration: "line-through", color: 'grey', fontWeight:"lighter"}}>Rs. 1299</span> <span style={{color: 'red'}}>(66% 0ff)</span></h5>
                                 </div>

                                 
                             </div>
                         </div>
                </div>

            </Box>
       
    )
}