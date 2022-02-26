import styles from "./Nav.module.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { v4 as uuidv4 } from 'uuid';

const DropDown = (props) => {

    return(
        <li onMouseEnter={()=>props.setDropDownActive(props.category)} onMouseLeave={()=>props.setDropDownInActive(props.category)}> 
            <div>{props.category}<KeyboardArrowDownIcon /> </div>
            <ul className={styles.dropDown} style={{display: props.active ? "block" : "none"}}>
                {
                    props.subCategories.map((el)=>{ 
                       return <li key={uuidv4()}> {el.name} </li>;
                    })
                }
            </ul>
        </li>
    )
}

export default DropDown;