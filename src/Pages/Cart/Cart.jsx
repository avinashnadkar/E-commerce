import CartProduct from "../../Components/CartProduct/CartProduct";
import styles from "./Cart.module.css";
import data from "../../Data/Cart.json";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const Cart = () => {

    //state for cart products
    const [cart, setCart] = useState(data);

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

    useEffect(() => {
       totalPrice()
    });
    
    return(
        <div>

            {
                cart.length == 0 ?
                <div className={styles.emptyCart}>
                    <img src="https://www.jiomart.com/msassets/images/emptycart.svg"/>
                    <h3>Your Cart is empty!</h3>
                    <button>Add Products</button>
                </div>
                :
                <div className={styles.cart}>
                <div className={styles.products}>
                  <div className={styles.totalCost}>
                    <h3>Groceries Basket ({cart.length} items)</h3> 
                    <h3>₹{total.price}.00</h3> 
                  </div>
                  {
                     cart.map((el)=>{
                        return  <CartProduct {...el} key={uuidv4()}/>
                     })
                  }
                </div>
 
                <div className={styles.paymentDetails}>
                     <h3>Payment Details</h3>
                     <div>
                         <p>MRP Total</p> 
                         <p>₹{total.price}.00</p>
                     </div> 
                     <div>
                         <p>Product Discount</p>
                         <p>₹{total.discount}.00</p>
                     </div> 
                     <div>
                         <p className={styles.payingPrice}>Total Amount</p>
                         <p className={styles.payingPrice}>₹{total.price - total.discount}.00</p>
                     </div> 
                     <p className={styles.savings}>You Save ₹{total.discount}.00</p>
                     <button className={styles.placeOrder}>Place Order</button>
                </div>
             </div>

            }
         
        </div>
    )
}

export default Cart;