import styles from './Account.module.css';
import { useSelector } from 'react-redux';

const Account = () => {

    //state for page
    const userInfo = useSelector((state)=>state.userInfoReducer)
    console.log(userInfo)

    return(
       <div className={styles.account}>
           <h2>My Account</h2>
           <div className={styles.cardContainer}>
           <div className={styles.accountCard}>
               <h4>Account information</h4>
               <div className={styles.row}>
                <div className={styles.col_1}>
                    <div>
                        <p>Full Name</p>
                        <h5>{userInfo.name}</h5>
                    </div>
                    <div>
                        <p>Email id</p>
                        <h5>{userInfo.email}</h5>
                    </div>
                </div>

                <div className={styles.col_2}>
                    <div>
                        <p>Defualt address</p>
                        <h5>{userInfo.address}</h5>
                    </div>
                </div>
                </div>
           </div>

           <div className={styles.options}>
                <div>Your orders</div>
                <div>Wishlist</div>
                <div>Contact us</div>
                <div>Logout</div>
           </div>
           </div>
       </div>
    )
}

export default Account;