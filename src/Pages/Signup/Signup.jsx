import styles from "./Signup.module.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useSelector,useDispatch} from 'react-redux';
import {addressBoxToggle,signupInputHandler} from "../../Redux/action";
import { signup } from "../../Redux/action";

const Signup = () => {

    //state for signup
    const user = useSelector((state)=>state.signupReducer);
    const userInfo = useSelector((state)=>state.userInfoReducer)
 
    //dispatch function to dispatch actions to reducers
    const dispatch = useDispatch();

    //register user
    const registerUser = () => {
      dispatch(signup({
         name : user.name,
         email : user.email,
         address : user.addressLine1 + ", " + user.addressLine2 + ", " +user.addressLine3,
         password : user.password
      }))
    }

    return(
        <div>
        <div className={styles.signup} style={{display: !user.toggleAdressBox? "block" : "none"}}>
            <h3>Sign Up</h3> 
            <p>Sign Up to access your Orders, Offers and Wishlist.</p>
            <p className={styles.lables}>Name</p>
            <div className={styles.inputBox}>
               <input type="text" className={styles.input} placeholder="Enter name" name="name" value={user.name} onChange={(e)=>dispatch(signupInputHandler(e.target.value,e.target.name))}/>
            </div>
            <p className={styles.lables}>Email</p>
            <div className={styles.inputBox}>
               <input type="email" className={styles.input} placeholder="Enter email" name="email" value={user.email} onChange={(e)=>dispatch(signupInputHandler(e.target.value,e.target.name))}/>
            </div>
            <p className={styles.lables}>Password</p>
            <div className={styles.inputBox}>
               <input type="password" className={styles.input} placeholder="Enter password" name="password" value={user.password} onChange={(e)=>dispatch(signupInputHandler(e.target.value,e.target.name))}/>
            </div>
            <button className={styles.toggleBtn} onClick={()=>dispatch(addressBoxToggle())}><ArrowForwardIosIcon/></button>    
        </div>
        <div style={{display: !user.toggleAdressBox? "none" : "block"}} className={styles.signup}>
            <h2>Addrss</h2>
            <p className={styles.lables}>Addres line 1</p>
            <div className={styles.inputBox}>
               <input type="text" className={styles.input} placeholder="City" name="addressLine1" value={user.addressLine1} onChange={(e)=>dispatch(signupInputHandler(e.target.value,e.target.name))}/>
            </div>
            <p className={styles.lables}>Addres line 2</p>
            <div className={styles.inputBox}>
               <input type="text" className={styles.input} placeholder="State" name="addressLine2" value={user.addressLine2} onChange={(e)=>dispatch(signupInputHandler(e.target.value,e.target.name))}/>
            </div>
            <p className={styles.lables}>Addres line 3</p>
            <div className={styles.inputBox}> 
               <input type="text" className={styles.input} placeholder="Area" name="addressLine3" value={user.addressLine3} onChange={(e)=>dispatch(signupInputHandler(e.target.value,e.target.name))}/>
            </div>
            <p className={styles.lables}>Addres line 4</p>
            <div className={styles.inputBox}>
               <input type="text" className={styles.input} placeholder="Pincode" name="addressLine4" value={user.addressLine4} onChange={(e)=>dispatch(signupInputHandler(e.target.value,e.target.name))}/>
            </div>
            <div className={styles.btns}>
                <p onClick={()=>dispatch(addressBoxToggle())}>Go back</p>
                <button className={styles.submitBtn} onClick={registerUser}>Sign up</button>    
            </div>
        </div>
     </div>
    )
}

export default Signup;