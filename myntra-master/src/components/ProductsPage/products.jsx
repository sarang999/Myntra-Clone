import { ProductsTop } from "./productsTop";
import { ProductsBody } from "./productsBody";
import styles from "./products.module.css";


export const Products = () => {
  return <div className= {styles.productsPage}>
    {/* <ProductsTop></ProductsTop> */}
    <ProductsBody></ProductsBody>

  </div>;
};
