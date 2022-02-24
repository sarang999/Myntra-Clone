//import { BrowserRouter as Router,Routes, Route} from "react-router-dom";


//components
import {Header} from "./components/header/Header"
// import {Home} from "./components/home/Home"
// import {Cart} from "./components/cart/Cart"
// import {Login} from "./components/login/login"
// import {Footer} from "./components/footer/Footer"
import { Productdeatils } from "./components/productDetails/Productdetails";

function App() {
  return (
    // <Router>
    //  <Header />
    
    //  <Routes>
    //       <Route exact path="/" element={<Home/>} />
    //  </Routes>
     
    //  <Footer/>
    // </Router>
    <div>
    <Header/>
    <Productdeatils/>
    </div>
    
  );
}

export default App;
