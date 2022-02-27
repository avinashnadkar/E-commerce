import Nav from "../Components/Navbar/Nav";
import Footer from "../Components/Footer/Footer";
import { Route,Routes } from "react-router-dom";
import Signin from "../Pages/Signin/Signin";
import Cart from "../Pages/Cart/Cart";

const Router = () => {
    return(
        <>
          <Nav/>
            <Routes>
              <Route exact path="/login" element={<Signin/>}/>
              <Route exact path="/cart" element={<Cart/>}/>
            </Routes>
          <Footer/>
        </>
    )
}

export default Router;