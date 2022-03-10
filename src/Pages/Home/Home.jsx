import Carousel from "../../Components/Carousels/Carousel";
import ProductCard from "../../Components/ProductCard/ProductCard";
import data from "../../Data/Products.json";
import styles from "./Home.module.css";

const Home = () => {
    return(
        <div>

             <Carousel/>
        
              <div className={styles.productContainer}>
                  {
                    data.map((el)=>{
                    return <ProductCard {...el} />
                    })
                  }
              </div>

              <div className={styles.banner}>
                  <div className={styles.row_1}>
                     <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1646413337_600x350-Cheesy-Specials.jpg"/>
                     <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1623423184_wm.jpg"/>
                  </div>
                  <div className={styles.row_2}>
                     <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1644591761_Min-33-600x350.jpg"/>
                     <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1646420460_Helmet-banner_600x350.jpg"/>
                  </div>
              </div>
        </div>
    )
}


export default Home;