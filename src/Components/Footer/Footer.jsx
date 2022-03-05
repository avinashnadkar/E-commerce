import styles from "./Footer.module.css";

const Footer = () => {
    return (

        <footer className={styles.footer}>
            <div className={styles.col_1}>
                <h4>MOST POPULAR CATEGORIES</h4>
                 <ul className={styles.footerLinks}>       
                    <li>Staples</li>
                    <li>Beverages</li>
                    <li>Personal Care</li>
                    <li>Home Care</li>
                    <li>Fruits and Vegetables</li>
                    <li>Baby Care</li>
                    <li>Snacks & Branded Foods</li>
                    <li>Dairy & Bakery</li>
                 </ul>
            </div>

            <div className={styles.col_2}>
                <h4>CUSTOMER SERVICES</h4>
                 <ul className={styles.footerLinks}>       
                    <li>About Us</li>
                    <li>FAQ</li>
                    <li>Terms and conditions</li>
                    <li>Privacy policy</li>
                    <li>E-waste Policy</li>
                    <li>Cancellation and return policy</li>
                 </ul>
            </div>

            <div className={styles.col_3}>
               <h4>CONTACT US</h4> 
                <p>WhatsApp us : 700xxx xxx03</p>

                <p> Call Us : 18xx xxx xx22
                8:00 AM to 8:00 PM, 365 days</p>

                <p> Please note that you are accessing the 
                    BETA Version of onlineshop</p>

                <p>Should you encounter any bugs, glitches, lack of functionality, 
                    delayed deliveries, billing errors or other problems on the 
                    beta website, please email us on onlineshop </p>

                <h4>DOWNLOAD APP</h4>

                <div className={styles.appStoreLink}>
                    <div><img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png"/></div>
                    <div><img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png"/></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;