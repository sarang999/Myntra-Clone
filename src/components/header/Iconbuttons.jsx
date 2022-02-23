import {Box, Button, Typography, makeStyles} from "@material-ui/core";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


const useStyle = makeStyles(
    {
        buttons: {

            display: 'flex',
            flexDirection: 'row'

        }
    }
)







export const Iconbuttons = () =>{

    const classes = useStyle()
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return(
        <>
        <Box>
            <Button className={classes.buttons}>
                  <PersonOutlineOutlinedIcon/>
            </Button>
        </Box>

        <Box>
                <Button className={classes.buttons}>
                  <FavoriteBorderOutlinedIcon/>
                
                </Button>
        </Box>
       
       <Box>
           <Button className={classes.buttons}>
               <ShoppingBagOutlinedIcon/>
            
           </Button>
          
       </Box>
       
      
        </>

       

    )
} 