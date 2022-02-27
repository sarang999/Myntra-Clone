import styles from "./WomensPage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";
// import styles from "./productsTop.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

export const WomensProducts = () => {
  let [products, setProducts] = useState([]);
  const [dataLength, setdataLength] = useState([]);
  const [sorting, setsorting] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    getData();
  }, []);
  function getData() {
    axios
      .get(
        "https://ecommyntra-fake-server-app.herokuapp.com/womens_product_data"
      )
      .then((res) => {
        setProducts(res.data);
        setdataLength(res.data.length);
      });
  }
  console.log(products);
  let c = 0;
  const handleChange = (e) => {
    let selected = e.target.value;
    if (selected === "low") {
      setProducts(
        products.sort(function (a, b) {
          setsorting(c++);
          return a.price - b.price;
        })
      );
    } else if (selected === "high") {
      setProducts(
        products.sort(function (a, b) {
          setsorting(c++);
          return b.price - a.price;
        })
      );
    } else if (selected === "rating") {
      setProducts(
        products.sort(function (a, b) {
          setsorting(c++);
          return a.rating - b.rating;
        })
      );
    } else if (selected === "topDisc") {
      setProducts(
        products.sort(function (a, b) {
          setsorting(c++);
          return b.discount - a.discount;
        })
      );
    } else if (selected === "popular") {
      setProducts(
        products.sort(function (a, b) {
          setsorting(c++);
          return b.count - a.count;
        })
      );
    } else if (selected === "recomend") {
      setProducts(
        products.sort(function (a, b) {
          setsorting(c++);
          return a.count - a.price;
        })
      );
    }
  };
  console.log(isChecked);
  function handleOnChange() {
    console.log("checked");
    setIsChecked(!isChecked);
    let filteredData = [];
    if (isChecked === false) {
      products.forEach(function (item) {
        if (item.categories === "tops") {
          console.log("checkedsssss");
          filteredData.push(item);
        }
        setProducts(filteredData);
      });
    } else if (isChecked === true) {
      axios
        .get(
          "https://ecommyntra-fake-server-app.herokuapp.com/womens_product_data"
        )
        .then((res) => {
          setProducts(res.data);
          setdataLength(res.data.length);
        });
    }
  }

  return (
    <div>
      {/* -------------------------------------------- Top header ---------------------------------------------- */}
      <div className={styles.rproducts}>
        <div id={styles.topProds}>
          {/* ------------------ Top Left Box ---------- */}
          <div className={styles.topLeft}>
            <div className={styles.topFlex}>
              <p>Home / Clothing / </p>
              <p style={{ marginLeft: "-14px" }}> Women's Clothing</p>
            </div>
            <div className={styles.topFlexMid}>
              <p>Women Items - </p>
              <p style={{ marginLeft: "-14px" }}>{dataLength} items</p>
            </div>
            <div className={styles.topFlexBot}>
              <p>FILTERS</p>
            </div>
          </div>
          {/* ------------------ Top Left Box End---------- */}
          <div className={styles.topMiddle}>
            {/* ----------------- Top Mid Box -------------- */}
            <div className={styles.topMidBox}>
              <div>
                <p className={styles.rpTag}>
                  Bundles <IoIosArrowDown className={styles.ricons} />{" "}
                </p>
              </div>
              <div>
                <p className={styles.rpTag}>
                  Country of Orgin <IoIosArrowDown className={styles.ricons} />
                </p>
              </div>
              <div>
                <p className={styles.rpTag}>
                  Size <IoIosArrowDown className={styles.ricons} />
                </p>
              </div>
            </div>
          </div>
          {/* ----------------- Top Mid Box End -------------- */}
          <div className={styles.topRight}>
            {/* ----------------- Top Right Box -------------- */}
            <div id={styles.rselectBox}>
              <p className={styles.sortTag}>Sort By :</p>
              <select id={styles.selectOpt} onChange={handleChange}>
                <option value="recomend">Recommended</option>
                {/* <option value= "new">What's New</option> */}
                <option value="popular">Popularity</option>
                <option value="topDisc">Better Discount</option>
                <option value="high">Price: High to Low</option>
                <option value="low">Price: Low to Hgh</option>
                <option value="rating">Customer Rating</option>
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
          <input
            id={styles.rinput}
            type="checkbox"
            checked={isChecked}
            onChange={handleOnChange}
          ></input>
          <label className={styles.rlabel}>Tops</label>
          <br />
          <input id={styles.rinput} type="checkbox"></input>
          <label className={styles.rlabel}>T-Shirts</label>
          <hr
            style={{
              borderTop: "none",
              borderBottom: "1px solid black",
              marginLeft: "-12%",
            }}
          />

          {/* ------------------------------------ Brands ------------------------ */}
          <h5>BRAND</h5>
          <input id={styles.rinput} type="checkbox"></input>
          <label className={styles.rlabel}>Clovia</label>
          <br />
          <input id={styles.rinput} type="checkbox"></input>
          <label className={styles.rlabel}>Puma</label>
          <br />
          <input id={styles.rinput} type="checkbox"></input>
          <label className={styles.rlabel}>WROGN</label>
          <br />
          <input id={styles.rinput} type="checkbox"></input>
          <label className={styles.rlabel}>Mast & Harbour</label>
          <br />
          <input id={styles.rinput} type="checkbox"></input>
          <label className={styles.rlabel}>Dressberry</label>
          <br />
          <input id={styles.rinput} type="checkbox"></input>
          <label className={styles.rlabel}>Roadster</label>
          <br />
          <input id={styles.rinput} type="checkbox"></input>
          <label className={styles.rlabel}>HERE&NOW</label>
          <br />
          <input id={styles.rinput} type="checkbox"></input>
          <label className={styles.rlabel}>Celfie Design</label>

          <hr
            style={{
              borderTop: "none",
              borderBottom: "1px solid black",
              marginLeft: "-12%",
            }}
          />

          {/* ------------------------------------ Price ------------------------ */}

          <h5>Price</h5>
          <input id={styles.rinput} type="checkbox"></input>
          <label className={styles.rlabel}>Rs. 174 to Rs. 1631</label>
          <br />
          <input id={styles.rinput} type="checkbox"></input>
          <label className={styles.rlabel}>Rs. 1631 to Rs. 3088</label>
          <br />
          <input id={styles.rinput} type="checkbox"></input>
          <label className={styles.rlabel}>Rs. 3088 to Rs. 4545 </label>
          <br />
          <input id={styles.rinput} type="checkbox"></input>
          <label className={styles.rlabel}>Rs. 4545 to Rs. 6002</label>
          <br />

          <hr
            style={{
              borderTop: "none",
              borderBottom: "1px solid black",
              marginLeft: "-12%",
            }}
          />

          {/* ------------------------------------ Color ------------------------ */}

          <h5>Color</h5>
          <input
            id={styles.rinput}
            style={{ verticalAlign: "top" }}
            type="checkbox"
          ></input>
          <span
            className={styles.dot}
            style={{ backgroundColor: "black" }}
          ></span>
          <label className={styles.rlabel}>Black</label>
          <br />
          <input id={styles.rinput} type="checkbox"></input>
          <span
            className={styles.dot}
            style={{ backgroundColor: "white" }}
          ></span>
          <label className={styles.rlabel}>White</label>
          <br />
          <input id={styles.rinput} type="checkbox"></input>
          <span
            className={styles.dot}
            style={{ backgroundColor: "blue" }}
          ></span>
          <label className={styles.rlabel}>Blue </label>
          <br />
          <input id={styles.rinput} type="checkbox"></input>
          <span
            className={styles.dot}
            style={{ backgroundColor: "navy" }}
          ></span>
          <label className={styles.rlabel}>Navy Blue</label>
          <br />
          <input id={styles.rinput} type="checkbox"></input>
          <span
            className={styles.dot}
            style={{ backgroundColor: "red" }}
          ></span>
          <label className={styles.rlabel}>Red</label>
          <br />
          <input id={styles.rinput} type="checkbox"></input>
          <span
            className={styles.dot}
            style={{ backgroundColor: "grey" }}
          ></span>
          <label className={styles.rlabel}>Grey</label>
          <br />
          <input id={styles.rinput} type="checkbox"></input>
          <span
            className={styles.dot}
            style={{ backgroundColor: "green" }}
          ></span>
          <label className={styles.rlabel}>Green</label>
          <br />

          <hr
            style={{
              borderTop: "none",
              borderBottom: "1px solid black",
              marginLeft: "-12%",
            }}
          />

          {/* ------------------------------------ Disscount ------------------------ */}

          <h5>Disscount</h5>
          <input id={styles.rinput} type="radio"></input>
          <label className={styles.rlabel}>10% and above</label>
          <br />
          <input id={styles.rinput} type="radio"></input>
          <label className={styles.rlabel}>20% and above</label>
          <br />
          <input id={styles.rinput} type="radio"></input>
          <label className={styles.rlabel}>30% and above</label>
          <br />
          <input id={styles.rinput} type="radio"></input>
          <label className={styles.rlabel}>40% and above</label>
          <br />
          <input id={styles.rinput} type="radio"></input>
          <label className={styles.rlabel}>50% and above</label>
          <br />
          <input id={styles.rinput} type="radio"></input>
          <label className={styles.rlabel}>60% and above</label>
          <br />
          <input id={styles.rinput} type="radio"></input>
          <label className={styles.rlabel}>70% and above</label>
          <br />
          <input id={styles.rinput} type="radio"></input>
          <label className={styles.rlabel}>80% and above</label>
          <br />
        </div>

        {/* -------------------------------------------------Right Div !important ---------------------------------- */}

        <div id={styles.rightPart}>
          <div id={styles.appendData}>
            {products.map((item) => {
              {
                /* console.log(item.images.image1) */
              }
              return (
                <div id={styles.dataGrid} key={item.i}>
                  <Link to={`/productsdetails/${item.id}`}>
                    <img className={styles.img1} src={item.images.image1}></img>
                  </Link>

                  <div className={styles.prodDetails}>
                    <button
                      style={{ marginLeft: "-12px", width: "105%" }}
                      className={styles.wishButton}
                    >
                      <FaRegHeart className={styles.iconHeart} /> WISHLIST{" "}
                    </button>
                    <div className={styles.prodBrand}>{item.brand}</div>
                    {/* <div>{item.description}</div> */}
                    <div className={styles.prodTitle}>{item.title}</div>
                    <div className={styles.prodSize}>{item.size}</div>
                    <div className={styles.prodPrice}>
                      {" "}
                      <div>Rs: {item.price}</div>{" "}
                      <div
                        style={{
                          textDecoration: "line-through",
                          marginLeft: "4px",
                        }}
                      >
                        {" "}
                        Rs: {item.off_price}
                      </div>{" "}
                      <div style={{ color: "red", marginLeft: "4px" }}>
                        ({item.discount} %OFF)
                      </div>{" "}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
