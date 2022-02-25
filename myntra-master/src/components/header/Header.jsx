import { AppBar, Toolbar, makeStyles, Box, Typography} from "@material-ui/core";
import { SearchBar } from "./SearchBar";
import { Iconbuttons } from "./Iconbuttons";
// import {Link} from "react-router-dom"
// import {Men} from "./Men"




const useStyle = makeStyles(
    {
        header: {
           background: "white",
           height: 80,
           boxShadow: " rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
           
        },

        logo: {
             width: 60,
             
        },

        

        container: {
            display: 'flex',
            color: 'black',
            fontSize: 'bold',
            paddingLeft: '3%'
        },

        subHeading: {
            padding: 15,
           
        }
       
    }
)



export  const Header = () =>
{
     const classes = useStyle();
     const logoUrl = "https://gumlet.assettype.com/afaqs%2F2021-01%2F15f5f827-8e29-4520-af8d-a0f353b8da17%2Fimages.png?auto=format&q=35&w=1200";
    return(
        <AppBar className={classes.header}>
            <Toolbar>
                {/* <Link to="/"> */}
                <Box>
                 <img src= {logoUrl} className={classes.logo}/>
                 </Box>
                 {/* </Link> */}
                 <Box component="span" className={classes.container}>
                        <Typography className = {classes.subHeading}>Men</Typography>
                        <Typography className = {classes.subHeading}>Woman</Typography>
                        <Typography className = {classes.subHeading}>Kids</Typography>
                        <Typography className = {classes.subHeading}>Home&Living</Typography>
                        <Typography className = {classes.subHeading}>Beauty</Typography>
                        <Typography className = {classes.subHeading}>Studio <Box component="span" style={{color:'red', verticalAlign: 'text-bottom', fontSize: '15px'}}>New</Box></Typography>
                        
                        
                 </Box>
                 <SearchBar/>
                 <Iconbuttons/>
            </Toolbar>
           
        </AppBar>
    )
}

