import { useState } from "react";
import styles from "./Carousel.module.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Carousel = () => {

    let imagesArr = ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1646347689_best_sellers_web.jpg",
                     "https://www.jiomart.com/images/cms/aw_rbslider/slides/1646796190_Womens-day_Layout_1680x320.jpg",
                     "https://www.jiomart.com/images/cms/aw_rbslider/slides/1646755699_March9th_banner-1_web.jpg"]

    const [currentImg,setCurrentImg] = useState(0)

    const slideLeft = () => {
       if(currentImg == 0){
           setCurrentImg(imagesArr.length-1)
       }else{
           setCurrentImg(currentImg-1)
       }

       console.log(currentImg)
    }

    const slideRight = () => {
        if(currentImg == imagesArr.length-1){
            setCurrentImg(0)
        }else{
            setCurrentImg(currentImg+1)
        }
    }

    return(
        <div>
              <div className={styles.imgContainer}>
              <button onClick={slideLeft} className={styles.leftBtn}><ChevronLeftIcon/></button>
                  <img src={imagesArr[currentImg]} className={styles.image}/>
              <button onClick={slideRight} className={styles.rightBtn}><ChevronRightIcon/></button>
              </div>
        </div>
    )
}

export default Carousel;