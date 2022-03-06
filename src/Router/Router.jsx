import Nav from "../Components/Navbar/Nav";
import Footer from "../Components/Footer/Footer";
import { Route,Routes } from "react-router-dom";
import Signin from "../Pages/Signin/Signin";
import Cart from "../Pages/Cart/Cart";
import Admin from "../Pages/Admin/Admin";
import Checkout from "../Pages/Checkout/Checkout";
import Payment from "../Pages/Payment/Payment";

const Router = () => {
    return(
        <>
            {
              //render common components according to pages
              (location.pathname == '/admin' ) ?  <></> :  <Nav/> 
            }
    
            <Routes>
              <Route exact path="/login" element={<Signin/>}/>
              <Route exact path="/cart" element={<Cart/>}/>
              <Route exact path="/Admin" element={<Admin/>}/>
              <Route exact path="/checkout" element={<Checkout/>}/>
              <Route exact path="/payment" element={<Payment/>}/>
            </Routes>

            {
              //render common components according to pages
              (location.pathname == '/admin' ) ?  <></> : <Footer/>

            }
        </>
    )
}

export default Router;