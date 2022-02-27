import styles from "./Signin.module.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";

const Signin = () => {

    //state for mobile number
    const [mobileNumber, setMobileNumber] = useState("");
    //state for otp
    const [otp, setOtp] = useState("");
    //state for to check phone number submited or not submited
    const [submited, setSubmited] = useState(false);

    //handle state change of phone number
    const handleChange = (e) => {
        setMobileNumber(e.target.value);
        console.log(mobileNumber);
    }

    //change state change of otp
    const handleChangeOtp = (e) => {
        setOtp(e.target.value);
        console.log(otp);
    }

    //Submit phone number
    const handleSubmit = () => {
        setSubmited(true);
    }

    return (
        <div>
           <div className={styles.signin}>
               <h3>Sign in</h3> 
               <p>Sign in to access your Orders, Offers and Wishlist.</p>
               <div className={styles.inputBox}>
                  <span className={styles.countryCode}>+91</span>
                  <input type="text" className={styles.mobileNumInput} placeholder="Enter your mobile number" value={mobileNumber} onChange={handleChange}/>
               </div>
               <button className={styles.submitBtn} style={{display : submited ?  "none" : "block" }} onClick={handleSubmit}><ArrowForwardIosIcon/></button>

               <div style={{display : submited ? "block" : "none"}}>
                    <div className={styles.inputBoxOtp}>
                        <input type="text" className={styles.otpInput} placeholder="Enter your OTP" value={otp} onChange={handleChangeOtp}/>
                    </div>

                    <button className={styles.verifyBtn}>Verify</button>
               </div>
               
           </div>
        </div>
    )
}

export default Signin;