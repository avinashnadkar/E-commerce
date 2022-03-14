import Carousel from "../../Components/Carousels/Carousel";
import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from "./Home.module.css";
import { useSelector,useDispatch } from "react-redux";
import { addToCart, increaseQty, decreaseQty } from "../../Redux/action";

const Home = () => {

    //get state of homePage
    const products = useSelector((state)=>state.productReducer.homePageProducts);
    const cart = useSelector((state)=>state.cartReducer.cart)

    //dispatch function to reducers
    const dispatch = useDispatch();


    return(
        <div>

             <Carousel/>
        
              <div className={styles.productContainer}>
                  {
                    products.map((el)=>{
                      {/* update quantity */}
                      for(var i=0;i<cart.length;i++){
                         if(cart[i].name == el.name){
                            el.quantity = cart[i].quantity
                            break;
                         }
                      }
                      return <ProductCard {...el} addCart={()=>dispatch(addToCart(el))} increase={()=>dispatch(increaseQty(el))} decrease={()=>{dispatch(decreaseQty(el))}}/>
                    })
                  }
              </div>

              <div className={styles.banner}>
                  <div className={styles.row_1}>
                     <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1646413337_600x350-Cheesy-Specials.jpg"/>
                     <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1623423184_wm.jpg"/>
                  </div>
                  <div className={styles.row_2}>
                     <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1644591761_Min-33-600x350.jpg"/>
                     <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1646420460_Helmet-banner_600x350.jpg"/>
                  </div>
              </div>
        </div>
    )
}


export default Home;