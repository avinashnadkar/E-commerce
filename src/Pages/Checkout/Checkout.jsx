import styles from "./Checkout.module.css";
import data from "../../Data/Cart.json";
import PaymentCard from "../../Components/PaymentCard/PaymentCard";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { v4 as uuidv4 } from 'uuid';

const Checkout = () => {
    return(
        <div className={styles.checkout}>

          <div className={styles.col_1}> 
                <h2>Order Summary</h2>

                <div className={styles.addressCard}>
                <h3>Select Delivery Address</h3>
                <div className={styles.address}>
                    <h4>Name of user</h4>
                    <p>Plot No. 567, Road No.60, Andheri West, Mumbai</p>
                    <p>Near Ganpati Mandir,</p>
                    <p>Mumbai - 400069, Maharashtra.</p>
                    <p>+91 -9123456780</p>
                </div>
                </div>

                <div className={styles.basket}>
                    <h3>Groceries Basket</h3>
                    {
                        data.map((el)=>{
                            return(
                                <div className={styles.checkoutProductCard} key={uuidv4()}>
                                    <img src={el.img}/>
                                    <div className={styles.productDetails}>
                                        <p>{el.name}</p>
                                        <div className={styles.priceAndDiscount}>
                                            <p>₹{el.price-el.discount}.00</p> 
                                            {
                                            el.discount > 0 ?  <p><del>₹{el.price}.00</del></p> : <></>
                                            }

                                            {
                                            el.discount > 0 ?   <p>You Save ₹{el.discount}.00</p> : <></>
                                            }
                                        
                                        </div>
                                        
                                        <p className={styles.quantity}>Qty : {el.quantity}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                    <p className={styles.deliveryDate}>Delivery Between 6th Mar to 8th Mar</p>

                </div>
          </div>

          <div className={styles.col_2}>
                <div className={styles.breadScrumb}>
                   <ShoppingCartIcon color="primary"/>
                   <p>Your Cart</p>
                   <div className={styles.breadScrumbLine}></div>
                   <SummarizeIcon color="primary"/>
                   <p>Order Summary</p>
                   <div className={styles.breadScrumbLine}></div>
                   <CreditCardIcon color="disabled" />
                   <p>Payment</p>
                </div>
                <PaymentCard/>
                <div className={styles.btn}>
                    <button className={styles.paymentBtn}>Make payment</button>
                </div>
          </div>
          

        </div>
    )
}

export default Checkout;