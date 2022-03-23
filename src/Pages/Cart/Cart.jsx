import CartProduct from "../../Components/CartProduct/CartProduct";
import styles from "./Cart.module.css";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { increaseQty, decreaseQty } from "../../Redux/action";

const Cart = () => {

    //state for Total price
    const [total,setTotal] = useState({price:0,discount:0,saving:0});

    //count total price, discount and savings
    const totalPrice = () => {
        let totalCount = 0;
        let totalDiscount = 0;
        let totalSavings = 0;
        for(let i =0;i<cart.length;i++){
            totalCount += (cart[i].price);
            totalDiscount += (cart[i].discount);
            totalSavings += (cart[i].price - cart[i].discount);
        }
        setTotal({
            price :  totalCount,
            discount : totalDiscount,
            savings : totalSavings
        })
    }

    //state for cart
    const cart = useSelector((state)=>state.cartReducer.cart)
    const totalP = useSelector((state)=>state.cartReducer.total);
    const totalS = useSelector((state)=>state.cartReducer.totalSavings);
    const totalM = useSelector((state)=>state.cartReducer.mrp);

    //dispatch actions to reducers
    const dispatch = useDispatch();

    useEffect(() => {
       totalPrice()
    },[]);
    
    return(
        <div>

            {
                cart.length == 0 ?
                <div className={styles.emptyCart}>
                    <img src="https://www.jiomart.com/msassets/images/emptycart.svg"/>
                    <h3>Your Cart is empty!</h3>
                    <Link to={'/'}><button>Add Products</button></Link>
                </div>
                :
                <div className={styles.cart}>
                <div className={styles.products}>
                  <div className={styles.totalCost}>
                    <h3>Groceries Basket ({cart.length} items)</h3> 
                    <h3>₹{totalP}.00</h3> 
                  </div>
                  {
                     cart.map((el)=>{
                        return  <CartProduct {...el} key={uuidv4()} increase={()=>dispatch(increaseQty(el))} decrease={()=>dispatch(decreaseQty(el))}/>
                     })
                  }
                </div>
 
                <div className={styles.paymentDetails}>
                     <h3>Payment Details</h3>
                     <div>
                         <p>MRP Total</p> 
                         <p>₹{totalM}.00</p>
                     </div> 
                     <div>
                         <p>Product Discount</p>
                         <p>₹{totalS}.00</p>
                     </div> 
                     <div>
                         <p className={styles.payingPrice}>Total Amount</p>
                         <p className={styles.payingPrice}>₹{totalP}.00</p>
                     </div> 
                     <p className={styles.savings}>You Save ₹{totalS}.00</p>
                     <Link to={"/checkout"}><button className={styles.placeOrder}>Place Order</button></Link>
                </div>
             </div>

            }
         
        </div>
    )
}

export default Cart;