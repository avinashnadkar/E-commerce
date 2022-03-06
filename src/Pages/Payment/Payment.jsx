import { Radio } from "@mui/material";
import PaymentCard from "../../Components/PaymentCard/PaymentCard";
import styles from "./Payment.module.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SummarizeIcon from '@mui/icons-material/Summarize';

const Payment = () => {
    return(
        <div className={styles.payment}>
            <div className={styles.col_1}>
                <h2>Payment</h2>
                <div className={styles.paymentMethods}>
                    <form>
                        <Radio/>Cash on Delivery
                    </form>
                <button className={styles.paymentBtn}>Pay ₹400.00 on delivery</button>
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
                   <CreditCardIcon color="primary" />
                   <p>Payment</p>
                </div>

                <div className={styles.paymentDetails}>
                <PaymentCard/>
                </div>
            </div>

        </div>
    )
}

export default Payment;