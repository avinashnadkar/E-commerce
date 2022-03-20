import styles from "./Nav.module.css";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { v4 as uuidv4 } from 'uuid';
import data from "../../Data/categories.json";
import DropDown from "./DropDown";
import { useState } from "react";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";

const Nav = () => {

    //State for category
    const [categoryData, setCategoryData] = useState(data);
    const userData = useSelector((state)=>state.userInfoReducer)
    let isAuth = userData.isUserLoggedIn;

    //Active dropdown
    const setDropDownActive = (category) => {
        const newArr = categoryData;
        for(let i=0;i<newArr.length;i++){
            if(newArr[i].category == category){
                newArr[i].active = true;
                break;
            }
        }
        setCategoryData([...newArr]);
    }

    //Inactive dropdown
    const setDropDownInActive = (category) => {
        const newArr = categoryData;
        for(let i=0;i<newArr.length;i++){
            if(newArr[i].category == category){
                newArr[i].active = false;
                break;
            }
        }
        setCategoryData([...newArr]);
    }

    return (
      <nav>
            <div className={styles.mainNavbar}>
                <div className={styles.logo}>OnlineShop</div>

                <div className={styles.searchBar}>         
                    <input type="text" placeholder="Search products..."/>
                </div>

                <div className={styles.navBtns}>
                    {
                       (isAuth) ? 
                       <Link to="/account"> <button> <PersonIcon /> <span>{userData.name}</span> </button></Link> 
                       :
                       <Link to="/login"> <button> <PersonIcon /> <span>Sign in / Sign up</span> </button></Link> 
                    }
                <Link to="/cart"><button> <ShoppingCartIcon/>  <span>Cart</span> </button></Link>
                </div>
            </div>

            <div className={styles.categories}>
                <ul>
                    {
                        categoryData.map((el)=>{
                            return <DropDown {...el} setDropDownActive={setDropDownActive} setDropDownInActive={setDropDownInActive} key={uuidv4()}/>;
                        })
                    }  
                </ul>
            </div>
      </nav>
    )
}

export default Nav;