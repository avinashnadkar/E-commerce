import styles from "./Admin.module.css";
import AdminSidebar from "../../Components/Sidebar/AdminSidebar";
import Dashboard from "../../Components/Dashboard/Dashboard";

const Admin = () => {
    return(
        <div className={styles.adminDashboard}>
              <AdminSidebar/>
              <Dashboard/>
        </div>
    )
}

export default Admin;