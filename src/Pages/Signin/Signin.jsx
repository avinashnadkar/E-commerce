import styles from "./Signin.module.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector, useDispatch  } from "react-redux";
import {loginInputHandler,otpInputHandler,otpInputToggle} from "../../Redux/action";

const Signin = () => {


    //States from store
    const phoneNumber = useSelector((state)=>state.loginReducer.phoneNumber);
    const otp = useSelector((state)=>state.loginReducer.otp);
    const showOtpBox = useSelector((state)=>state.loginReducer.showOtpInputBox);

    //dispatch function to dispatch actions to reducer
    const dispatch = useDispatch();

    return (
        <div>
           <div className={styles.signin}>
               <h3>Sign in</h3> 
               <p>Sign in to access your Orders, Offers and Wishlist.</p>
               <div className={styles.inputBox}>
                  <span className={styles.countryCode}>+91</span>
                  <input type="text" className={styles.mobileNumInput} placeholder="Enter your mobile number" value={phoneNumber} onChange={(e)=>dispatch(loginInputHandler(e.target.value))}/>
               </div>
               <button className={styles.submitBtn} style={{display : showOtpBox ?  "none" : "block" }} onClick={()=>dispatch(otpInputToggle())}><ArrowForwardIosIcon/></button>

               <div style={{display : showOtpBox  ? "block" : "none"}}>
                    <div className={styles.inputBoxOtp}>
                        <input type="text" className={styles.otpInput} placeholder="Enter your OTP" value={otp} onChange={(e)=>dispatch(otpInputHandler(e.target.value))}/>
                    </div>

                    <button className={styles.verifyBtn}>Verify</button>
               </div>
               
           </div>
        </div>
    )
}

export default Signin;