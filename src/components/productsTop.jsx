import styles from "./productsTop.module.css";
import { IoIosArrowDown } from 'react-icons/io';


export const  ProductsTop = () => {
    return (
        <div className={styles.products}>
     
            <div id = {styles.topProds}>
               {/* ------------------ Top Left Box ---------- */}
                <div class = {styles.topLeft}>
                    <div class = {styles.topFlex}>
                        <p>Home / Clothing / </p>
                        <p style = {{marginLeft:"4px"}}> Men T-Shirts</p>
                    </div>
                    <div class = {styles.topFlexMid}>
                        <p>Men T-Shirts - </p>
                        <p>150 items</p>
                    </div>
                    <div class = {styles.topFlexBot}>
                        <p>FILTERS</p>
                    </div>
                   
                </div>
                   {/* ------------------ Top Left Box End---------- */}
                <div class = {styles.topMiddle}>
                    {/* ----------------- Top Mid Box -------------- */}
                    <div class = {styles.topMidBox}>
                        <div><p class = {styles.pTag}>Bundles  <IoIosArrowDown className = {styles.icons}/> </p></div>
                        <div><p class = {styles.pTag}>Country of Orgin <IoIosArrowDown className = {styles.icons}/></p></div>
                        <div><p class = {styles.pTag}>Size <IoIosArrowDown className = {styles.icons}/></p></div>
                    </div>
                </div>
                      {/* ----------------- Top Mid Box End -------------- */}
                <div class = {styles.topRight}>
                    {/* ----------------- Top Right Box -------------- */}
                    <div id = {styles.selectBox}>
                        <p class = {styles.sortTag}>Sort By :</p>
                        <select id = {styles.selectOpt}>
                            <option>Recommended</option>
                            <option>What's New</option>
                            <option>Popularity</option>
                            <option>Better Discount</option>
                            <option>Price: High to Low</option>
                            <option>Price: Low to Hgh</option>
                            <option>Customer Rating</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}