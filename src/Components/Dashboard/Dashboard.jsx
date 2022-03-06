import styles from "./Dashboard.module.css";
import GroupIcon from '@mui/icons-material/Group';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Dashboard = () => {
    return(

        <div className={styles.dashboard}>
            <div className={styles.headerCards}>
                 <div className={styles.salesCard}>
                     <div>
                        <h2>37</h2>
                        <h4>Todays sales</h4>
                     </div>
                     <div className={styles.cardIcon}>
                        <ShowChartIcon style={{fontSize:46}}/>
                     </div>
                 </div>
                 <div className={styles.ordersCard}>
                     <div>
                        <h2>23</h2>
                        <h4>Pending orders</h4>
                     </div>
                     <div className={styles.cardIcon}>
                        <ShoppingCartIcon style={{fontSize:46}}/>
                     </div>
                 </div>
                 <div className={styles.usersCard}>
                     <div>
                       <h2>10</h2>  
                       <h4>New members</h4>
                     </div>
                     <div className={styles.cardIcon}>
                       <GroupIcon style={{fontSize:46}}/>
                     </div>
                 </div>
            </div>
        </div>
    )
}

export default Dashboard;