import Nav from "../Components/Navbar/Nav";
import Footer from "../Components/Footer/Footer";
import { Route,Routes } from "react-router-dom";
import Signin from "../Pages/Signin/Signin";
import Cart from "../Pages/Cart/Cart";
import Admin from "../Pages/Admin/Admin";
import Checkout from "../Pages/Checkout/Checkout";
import Payment from "../Pages/Payment/Payment";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup/Signup";
import Category from "../Pages/Category/Category";
import Account from "../Pages/Account/Account";

const Router = () => {
    return(
        <>
            {
              //render common components according to pages
              (window.location.pathname == '/admin' ) ?  <></> :  <Nav/> 
            }
    
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/login" element={<Signin/>}/>
              <Route exact path="/cart" element={<Cart/>}/>
              <Route exact path="/Admin" element={<Admin/>}/>
              <Route exact path="/checkout" element={<Checkout/>}/>
              <Route exact path="/payment" element={<Payment/>}/>
              <Route exact path="/signup" element={<Signup/>}/>
              <Route exact path="/category/:param" element={<Category/>}/>
              <Route exact path="/account" element={<Account/>}/>
            </Routes>

            {
              //render common components according to pages
              (window.location.pathname == '/admin' ) ?  <></> : <Footer/>

            }
        </>
    )
}

export default Router;