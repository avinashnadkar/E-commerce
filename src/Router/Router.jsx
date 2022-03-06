import Nav from "../Components/Navbar/Nav";
import Footer from "../Components/Footer/Footer";
import { Route,Routes } from "react-router-dom";
import Signin from "../Pages/Signin/Signin";
import Cart from "../Pages/Cart/Cart";
import Admin from "../Pages/Admin/Admin";

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
            </Routes>

            {
              //render common components according to pages
              (location.pathname == '/admin' ) ?  <></> : <Footer/>

            }
        </>
    )
}

export default Router;