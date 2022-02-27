import {Box, Button, Typography, makeStyles, Badge} from "@material-ui/core";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Link} from "react-router-dom"
import "../styles/iconButtons.css";
import { useSelector } from "react-redux";

const useStyle = makeStyles(
    {
        buttons: {

            display: 'flex',
            flexDirection: 'row',
             marginLeft: '3%'

        }
    }
)







export const Iconbuttons = () => {
    const bagData = useSelector(state => state.bag.bagData);
    const userAuth = useSelector((state) => state.loginred.userAuth);
    const username = useSelector(state => state.loginred.username);
    const classes = useStyle();
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return(
        <>
        <Box className={classes.buttons}>
           

                                    <div className="dropdown">
                        <button className="dropbtn"><PersonOutlineOutlinedIcon/></button>
                    <div className="dropdown-content">
                        

                        {
                            userAuth ? (<h5>Welcome { username}</h5>) : (  <h5>Welcome</h5>)
                        }
                              
                                <p>To access account and manage orders</p>
                        <a>
                            
                          
                                
                            {userAuth ? (
                            
                                <Link to="/login/userdetails">
                                    <button className="login">
                                       See your details 
                                    </button>
                                </Link>
                            ) : (
                            
                                <Link to="/login">
                                    <button className="login">
                                        Login/SignUp
                                    </button>
                                </Link>
                            )
                            }
                                
                            </a>
                            <hr/>
                      
                        <a href="#" >Order</a>
                        {userAuth ? (
                            <Link to="/wishlist">
                                 Wishlist
                                </Link>
                        ) : (
                                
                            <Link to="/login">
                           Wishlist
                           </Link> 
                            )}
                           
                            <a href="#">Gift cards</a>
                            <a href="#">Contact us</a>
                            <a href="#">Myntra insider<sup style={{color: "white", backgroundColor: "red"}}>New</sup></a>
                            <hr/>
                            <a href="#">Credits</a>
                            <a href="#">Coupons</a>
                            <a href="#">Saved cards</a>
                            <a href="#">Saved address</a>
                           
                        </div>
                        </div>
                  
          
        </Box>
                      
       
        <Box>
                               <Button className={classes.buttons}>

                    {userAuth ? (
                             <Link to="/wishlist">
                   
                            <FavoriteBorderOutlinedIcon />
                   
                    </Link>
                       
                        ):(
                          
                            <Link to="/login">
                              <FavoriteBorderOutlinedIcon />
                       
                            </Link>
                           
                            )
                    }
                     </Button>
                    </Box>
                
             
       
       
       {/* <Link to="/cart"> */}
       <Box>
           <Button className={classes.buttons}>
                    {userAuth ?(
                        <Badge badgeContent={bagData.length} color="secondary">

                            <Link to="/cart"> <ShoppingBagOutlinedIcon /></Link>
                            </Badge>)
                           
                        : (
                            <Badge badgeContent={"0"} color="secondary">

                            <Link to="/login"> <ShoppingBagOutlinedIcon /></Link>
                            </Badge>
                            )
                   
                       
}
              
            
           </Button>
        </Box>   
          
       {/* </Link> */}
       
      
        </>

       

    )
} 