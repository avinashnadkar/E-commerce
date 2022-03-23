import { useSelector,useDispatch } from "react-redux";
import { addToCart, increaseQty, decreaseQty } from "../../Redux/action";
import styles from "./Category.module.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import {getProductsByCategory} from "../../Redux/action";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Category = () => {

    const products = useSelector((state)=>state.productReducer.categoryPageProducts);
    const cart = useSelector((state)=>state.cartReducer.cart)
    const urlParameter = useSelector((state)=>state.productReducer.urlParam);

    //dispatch function to reducers
    const dispatch = useDispatch();

    //Get category by parameter
    useEffect(()=>{
        dispatch(getProductsByCategory(urlParameter))
    },[urlParameter])

    return(
        <div className={styles.category}>
            <div className={styles.filter}>
                <h2>Filters</h2>
                  
            </div>
            <div className={styles.productContainer}>
                {
                    products.map((el)=>{
                        return <ProductCard {...el} addCart={()=>dispatch(addToCart(el))} increase={()=>dispatch(increaseQty(el))} decrease={()=>{dispatch(decreaseQty(el))}} key={uuidv4()}/>
                    })
                }
            </div>
        </div>
    )
}

export default Category;