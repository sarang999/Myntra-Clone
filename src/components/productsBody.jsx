import styles from "./productsBody.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaRegHeart } from 'react-icons/fa';
// import styles from "./productsTop.module.css";
import { IoIosArrowDown } from 'react-icons/io';


export const ProductsBody = () => {
  let [products, setProducts] = useState([]);
  const[dataLength, setdataLength] = useState([]);
  const[sorting, setsorting] = useState([]);
  let data
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    axios
      .get("https://ecommyntra-fake-server-app.herokuapp.com/mens_product_data")
      .then((res) => {
        setProducts(res.data);setdataLength(res.data.length);
      });
      
      
   
  }
  console.log(products);
  let c = 0;
  const handleChange = (e) => {
    let selected = e.target.value;
    if(selected === "low"){
      setProducts(products.sort(function (a, b) {
        setsorting(c++);
        return a.price - b.price;
      }));
    }
    else if (selected === "high") {
      setProducts(products.sort(function (a, b) {
        setsorting(c++);
        return b.price - a.price;
 
      }));
    }
}

  return (
    <div>
    {/* -------------------------------------------- Top header ---------------------------------------------- */}
    <div className={styles.products}>
     
     <div id = {styles.topProds}>
        {/* ------------------ Top Left Box ---------- */}
         <div className = {styles.topLeft}>
             <div className = {styles.topFlex}>
                 <p>Home / Clothing / </p>
                 <p style = {{marginLeft:"4px"}}> Men's Clothing</p>
             </div>
             <div className = {styles.topFlexMid}>
                 <p>Men Items - </p>
                 <p>{dataLength} items</p>
             </div>
             <div className = {styles.topFlexBot}>
                 <p>FILTERS</p>
             </div>
            
         </div>
            {/* ------------------ Top Left Box End---------- */}
         <div className = {styles.topMiddle}>
             {/* ----------------- Top Mid Box -------------- */}
             <div className = {styles.topMidBox}>
                 <div><p className = {styles.pTag}>Bundles  <IoIosArrowDown className = {styles.icons}/> </p></div>
                 <div><p className = {styles.pTag}>Country of Orgin <IoIosArrowDown className = {styles.icons}/></p></div>
                 <div><p className = {styles.pTag}>Size <IoIosArrowDown className = {styles.icons}/></p></div>
             </div>
         </div>
               {/* ----------------- Top Mid Box End -------------- */}
         <div className = {styles.topRight}>
             {/* ----------------- Top Right Box -------------- */}
             <div id = {styles.selectBox}>
                 <p className = {styles.sortTag}>Sort By :</p>
                 <select id = {styles.selectOpt} onChange={handleChange}>
                     <option>Recommended</option>
                     <option value= "new">What's New</option>
                     <option value = "popular">Popularity</option>
                     <option value =  "topDisc">Better Discount</option>
                     <option  value = "high">Price: High to Low</option>
                     <option value = "low">Price: Low to Hgh</option>
                     <option value = "rating">Customer Rating</option>
                 </select>
             </div>
         </div>
     </div>
 </div>

 {/* -------------------------------------- Products body --------------------------------------------- */}
    
    <div className={styles.productsBody}>
      <div id={styles.leftPart}>
        {/* ------------------------------------ Categories ------------------------ */}
        <h5>CATEGORIES</h5>
        <input type="checkbox"></input>
        <label>T-shirts</label>
        <br />
        <input type="checkbox"></input>
        <label>Lounge Tshirts</label>
        <hr  style = {{borderTop:"none", borderBottom:"1px solid black", marginLeft:"-12%"}}/>

        {/* ------------------------------------ Brands ------------------------ */}
        <h5>BRAND</h5>
        <input type="checkbox"></input>
        <label>Roadster</label>
        <br />
        <input type="checkbox"></input>
        <label>Puma</label>
        <br />
        <input type="checkbox"></input>
        <label>WROGN</label>
        <br />
        <input type="checkbox"></input>
        <label>HRX by Hrithik Roshan</label>
        <br />
        <input type="checkbox"></input>
        <label>QUANCIOUS</label>
        <br />
        <input type="checkbox"></input>
        <label>U.S. Polo Assn</label>
        <br />
        <input type="checkbox"></input>
        <label>Friskers</label>
        <br />
        <input type="checkbox"></input>
        <label>Duke</label>

        <hr  style = {{borderTop:"none", borderBottom:"1px solid black", marginLeft:"-12%"}} />

        {/* ------------------------------------ Price ------------------------ */}

        <h5>Price</h5>
        <input type="checkbox"></input>
        <label>Rs. 174 to Rs. 1631</label>
        <br />
        <input type="checkbox"></input>
        <label>Rs. 1631 to Rs. 3088</label>
        <br />
        <input type="checkbox"></input>
        <label>Rs. 3088 to Rs. 4545 </label>
        <br />
        <input type="checkbox"></input>
        <label>Rs. 4545 to Rs. 6002</label>
        <br />

        <hr  style = {{borderTop:"none", borderBottom:"1px solid black",  marginLeft:"-12%"}}  />

        {/* ------------------------------------ Color ------------------------ */}

        <h5>Color</h5>
        <input type="checkbox"></input>
        <span className={styles.dot} style={{ backgroundColor: "black" }}></span>
        <label>Black</label>
        <br />
        <input type="checkbox"></input>
        <span className={styles.dot} style={{ backgroundColor: "white" }}></span>
        <label>White</label>
        <br />
        <input type="checkbox"></input>
        <span className={styles.dot} style={{ backgroundColor: "blue" }}></span>
        <label>Blue </label>
        <br />
        <input type="checkbox"></input>
        <span className={styles.dot} style={{ backgroundColor: "navy" }}></span>
        <label>Navy Blue</label>
        <br />
        <input type="checkbox"></input>
        <span className={styles.dot} style={{ backgroundColor: "red" }}></span>
        <label>Red</label>
        <br />
        <input type="checkbox"></input>
        <span className={styles.dot} style={{ backgroundColor: "grey" }}></span>
        <label>Grey</label>
        <br />
        <input type="checkbox"></input>
        <span className={styles.dot} style={{ backgroundColor: "green" }}></span>
        <label>Green</label>
        <br />

        <hr  style = {{borderTop:"none", borderBottom:"1px solid black",  marginLeft:"-12%"}}/>

        {/* ------------------------------------ Disscount ------------------------ */}

        <h5>Disscount</h5>
        <input type="radio"></input>
        <label>10% and above</label>
        <br />
        <input type="radio"></input>
        <label>20% and above</label>
        <br />
        <input type="radio"></input>
        <label>30% and above</label>
        <br />
        <input type="radio" ></input>
        <label>40% and above</label>
        <br />
        <input type="radio"></input>
        <label>50% and above</label>
        <br />
        <input type="radio"></input>
        <label>60% and above</label>
        <br />
        <input type="radio"></input>
        <label>70% and above</label>
        <br />
        <input type="radio"></input>
        <label>80% and above</label>
        <br />
      </div>

      {/* -------------------------------------------------Right Div !important ---------------------------------- */}
      
      
      <div id={styles.rightPart}>
        <div id={styles.appendData}>
          {products.map((item) => {
            {/* console.log(item.images.image1) */}
            return (
              <div id = {styles.dataGrid} key = {item.i}>
                <img className={styles.img1} src = {item.images.image1}></img>
              
                <div className={styles.prodDetails}>
                <button style = {{ marginLeft: "-12px", width:"105%"}} className={styles.wishButton}><FaRegHeart className = {styles.iconHeart}/> WISHLIST </button>
                <div className={styles.prodBrand}>{item.brand}</div>
                {/* <div>{item.description}</div> */}
                <div className={styles.prodTitle}>{item.title}</div>
                <div className={styles.prodSize}>{item.size}</div>
                <div className = {styles.prodPrice}> <div >Rs: {item.price}</div> <div style = {{textDecoration: 'line-through', marginLeft:"4px"}}> Rs: {item.off_price}</div> <div style = {{color:"red", marginLeft:"4px"}}>({item.discount} %OFF)</div> </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </div>
  );
};
