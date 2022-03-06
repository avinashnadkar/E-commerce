import styles from "./Sidebar.module.css";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ForumIcon from '@mui/icons-material/Forum';
import GroupIcon from '@mui/icons-material/Group';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CategoryIcon from '@mui/icons-material/Category';
import GridViewIcon from '@mui/icons-material/GridView';

const AdminSidebar = () => {
    return(
        <div className={styles.sidebar}>
            <ul>
                <li><GridViewIcon/>Dashboard</li>
                <li><ShoppingCartIcon/>Orders</li>
                <li><AttachMoneyIcon/>Transactions</li>
                <li><CategoryIcon/>Products</li>
                <li><ShowChartIcon/>Sales</li>
                <li><ForumIcon/>Chat</li>
                <li><GroupIcon/>Users</li>
                <li><ManageAccountsIcon/>Account</li>
            </ul>
        </div>
    )
}

export default AdminSidebar;