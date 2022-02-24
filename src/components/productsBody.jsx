import styles from "./productsBody.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export const ProductsBody = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  function getData() {
    axios
      .get("https://ecommyntra-fake-server-app.herokuapp.com/mens_product_data")
      .then((res) => {
        setProducts(res.data);
      });
  }
  console.log(products);

  return (
    <div className={styles.productsBody}>
      <div id={styles.leftPart}>
        {/* ------------------------------------ Categories ------------------------ */}
        <h5>CATEGORIES</h5>
        <input type="checkbox"></input>
        <label>T-shirts</label>
        <br />
        <input type="checkbox"></input>
        <label>Lounge Tshirts</label>
        <hr />

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

        <hr />

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

        <hr />

        {/* ------------------------------------ Color ------------------------ */}

        <h5>Color</h5>
        <input type="checkbox"></input>
        <span class={styles.dot} style={{ backgroundColor: "black" }}></span>
        <label>Black</label>
        <br />
        <input type="checkbox"></input>
        <span class={styles.dot} style={{ backgroundColor: "white" }}></span>
        <label>White</label>
        <br />
        <input type="checkbox"></input>
        <span class={styles.dot} style={{ backgroundColor: "blue" }}></span>
        <label>Blue </label>
        <br />
        <input type="checkbox"></input>
        <span class={styles.dot} style={{ backgroundColor: "navy" }}></span>
        <label>Navy Blue</label>
        <br />
        <input type="checkbox"></input>
        <span class={styles.dot} style={{ backgroundColor: "red" }}></span>
        <label>Red</label>
        <br />
        <input type="checkbox"></input>
        <span class={styles.dot} style={{ backgroundColor: "grey" }}></span>
        <label>Grey</label>
        <br />
        <input type="checkbox"></input>
        <span class={styles.dot} style={{ backgroundColor: "green" }}></span>
        <label>Green</label>
        <br />

        <hr />

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
        <input type="radio"></input>
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
            return (
              <div id = {styles.dataGrid}>
                <div>item.title</div>
                <div>item.description</div>
                <div>item.title</div>
                <div>item.title</div>
              </div>
            );
          })}
          ;
        </div>
      </div>
    </div>
  );
};
