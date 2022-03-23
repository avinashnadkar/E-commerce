import styles from "./Nav.module.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUrlParam } from "../../Redux/action";

const DropDown = (props) => {

    //dispatch action to reducers
    const dispatch = useDispatch();

    return(
        <li onMouseEnter={()=>props.setDropDownActive(props.category)} onMouseLeave={()=>props.setDropDownInActive(props.category)}> 
            <div>{props.category}<KeyboardArrowDownIcon /> </div>
            <ul className={styles.dropDown} style={{display: props.active ? "block" : "none"}}>
                {
                    props.subCategories.map((el)=>{ 
                       let link = "/category/" + el.link
                       return <Link to={link} key={uuidv4()} onClick={()=>dispatch(setUrlParam(el.link))}><li> {el.name}</li></Link>;
                    })
                }
            </ul>
        </li>
    )
}

export default DropDown;