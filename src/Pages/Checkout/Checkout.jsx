import styles from "./Checkout.module.css";
import PaymentCard from "../../Components/PaymentCard/PaymentCard";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Checkout = () => {

    //state for checkout
    const cart = useSelector((state)=>state.cartReducer.cart)
    const totalP = useSelector((state)=>state.cartReducer.total);
    const totalS = useSelector((state)=>state.cartReducer.totalSavings);
    const totalM = useSelector((state)=>state.cartReducer.mrp);
    const isAuth = useSelector((state)=>state.userInfoReducer.isUserLoggedIn);
    const address = useSelector((state)=>state.userInfoReducer.address)
    const name = useSelector((state)=>state.userInfoReducer.name)

    //Redirect to login page if user is not logged in
    let navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    },[isAuth,navigate])

    return(
        <div className={styles.checkout}>

          <div className={styles.col_1}> 
                <h2>Order Summary</h2>

                <div className={styles.addressCard}>
                <h3>Select Delivery Address</h3>
                <div className={styles.address}>
                    <h4>{name}</h4>
                    <p>{address}</p>
                </div>
                </div>

                <div className={styles.basket}>
                    <h3>Groceries Basket</h3>
                    {
                        cart.map((el)=>{
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
                <PaymentCard price={totalM} discount={totalS}/>
                <div className={styles.btn}>
                 <Link to={"/payment"}><button className={styles.paymentBtn}>Make payment</button></Link> 
                </div>
          </div>
          

        </div>
    )
}

export default Checkout;