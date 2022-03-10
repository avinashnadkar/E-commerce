import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
    return(
        <div className={styles.productCard}>
            <img src={props.img}/>
            <h2 className={styles.productName}>{props.name}</h2>
            {
                props.discount > 0 ? 
                    <>
                        <h2 className={styles.price}> ₹ {props.price - props.discount} </h2> 
                        <h4 className={styles.discountedPrice}><del>MRP {props.price} </del> </h4>
                        <h5 className={styles.totalSaving}>Save ₹ {props.discount}</h5>
                    </>

                    : 
                        
                    <h2 className={styles.price}> ₹ {props.price} </h2> 

            }

            {
               props.quantity >= 1 
               ? 
               <div className={styles.qtyCounter}>
                   <button>+</button>
                   {props.quantity}
                   <button>-</button>
               </div>
               : 
               <button className={styles.addToCartBtn}>Add to cart +</button>
            }
            
        </div>
    )
}

export default ProductCard;