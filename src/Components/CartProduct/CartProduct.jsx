import styles from "./CartProduct.module.css";

const CartProduct = (props) => {
    return(
       <div className={styles.cartProduct}>
           <div className={styles.cartProductContainer}>
                <img src={props.img}/>
                <div className={styles.productDetails}>
                    <h3 className={styles.productName}>{props.name}</h3>
                    <div className={styles.priceDetails}>
                        <h4>₹{props.price - props.discount}.00</h4>
                        <del><p>₹{props.price}.00</p></del>
                        <p className={styles.saving}>You Save ₹{props.discount}.00</p>
                    </div>
                </div>
           </div>
           <div className={styles.quantityCounter}>
               <button>-</button>
               {props.quantity}
               <button>+</button>
           </div>
       </div>
    )
}

export default CartProduct;