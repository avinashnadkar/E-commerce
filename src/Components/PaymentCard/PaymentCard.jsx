import styles from "./PaymentCard.module.css";

const PaymentCard = (props) => {
    return(
        <div className={styles.paymentDetails}>
            <h3>Payment Details</h3>
            <div>
                <p>MRP Total</p> 
                <p>₹{props.price}.00</p>
            </div> 
            <div>
                <p>Product Discount</p>
                <p>₹{props.discount}.00</p>
            </div> 
            <div>
                <p className={styles.payingPrice}>Total Amount</p>
                <p className={styles.payingPrice}>₹{props.price - props.discount}.00</p>
            </div> 
            <p className={styles.savings}>You Save ₹{props.discount}.00</p>
        </div>
    )
}

export default PaymentCard;