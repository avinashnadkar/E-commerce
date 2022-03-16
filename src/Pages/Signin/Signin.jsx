import styles from "./Signin.module.css";
import { useSelector, useDispatch  } from "react-redux";
import {loginInputHandler} from "../../Redux/action";
import { Link } from 'react-router-dom';

const Signin = () => {


    //States from store
    const state = useSelector((state)=>state.loginReducer);

    //dispatch function to dispatch actions to reducer
    const dispatch = useDispatch();

    return (
        <div>
           <div className={styles.signin}>
               <h3>Sign in</h3> 
               <p>Sign in to access your Orders, Offers and Wishlist.</p>
               <p className={styles.lables}>Email</p>
               <div className={styles.inputBox}>
                  <input type="text" className={styles.input} placeholder="Email" name="email" value={state.email} onChange={(e)=>dispatch(loginInputHandler(e.target.value,e.target.name))}/>
               </div>
               <p className={styles.lables}>Password</p>
               <div className={styles.inputBox}>
                  <input type="password" className={styles.input} placeholder="Password" name="password" value={state.password} onChange={(e)=>dispatch(loginInputHandler(e.target.value,e.target.name))}/>
               </div>
               <div className={styles.btns}>
                <Link to={"/signup"}><p>Create account</p></Link>
                <button className={styles.submitBtn}>Sign in</button>    
            </div>
           </div>
        </div>
    )
}

export default Signin;