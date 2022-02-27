import React, { useEffect, useState } from "react";
import "./wishlist.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteWishData,
  getWishData,
  patchWishData,
  patchWishEmptySize,
} from "../../redux/Wishlist/action";
import maxresdefault from "./images/maxresdefault.jpg";
import wishlist from "./images/wishlist.png";
import { postBagData } from '../../redux/Bag/action';
import { Link } from "react-router-dom";

// import { postBagData } from '../../Redux/Bag/action';

export const Wishlist = () => {

  

  const [wishlistModel, setWishlistModel] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [wishlistModelArray, setWishlistModelArray] = useState([]);
  const [delProduct, setDelProduct] = useState([]);
  const [isSizeSelected, setIsSizeSelected] = useState(false);
  const [isSizeNotSelected, setIsSizeNotSelected] = useState(false);
  const [isMovedToBag, setIsMovedToBag] = useState(false);
  const [isSame, setIsSame] = useState("");

  const wishlistData = useSelector((state) => state.wishlist.wishlistData);

  const dispatch = useDispatch();

  const handleDeleteWishlist = (idx) => {
    const deletedProduct = wishlistData.filter((item) => item.id === idx);
    setDelProduct(deletedProduct[0]);
    dispatch(deleteWishData(idx));
    setIsDeleted(true);
  };
  // console.log(delProduct);

  const handleModelWishlist = (idx) => {
    setWishlistModel(true);
    const updatedWishlistModel = wishlistData.filter((item) => item.id === idx);
    setWishlistModelArray(updatedWishlistModel);
  };

  const handleModelWishClose = (idx) => {
    setWishlistModel(false);
    setIsSizeSelected(false);
    setIsSame("");
    dispatch(patchWishEmptySize(idx));
  };

  const handleModelWishRetain = () => {
    setWishlistModel(true);
  };

  const handleDoneWithoutSize = () => {
    setIsSizeNotSelected(true);
  };

  const handleSizeSelect = (idx, sizex) => {
    setIsSizeSelected(true);
    setIsSame(sizex);

    dispatch(patchWishData(idx, sizex));
  };

  const handleMoveToBag = (idx) => {
    const deletedProduct = wishlistData.filter((item) => item.id === idx);
    setDelProduct(deletedProduct[0]);
    dispatch(deleteWishData(idx));
    setIsMovedToBag(true);
    setIsSizeSelected(false);

      const updatedBag = wishlistData.filter(el=> el.id===idx )
      dispatch( postBagData(updatedBag[0]) )
      setIsSame("")
  };

  useEffect(() => {
    dispatch(getWishData());
    setWishlistModel(false);

    if (isDeleted) {
      setTimeout(() => {
        setIsDeleted(false);
      }, 1500);
    }

    if (isSizeNotSelected) {
      setTimeout(() => {
        setIsSizeNotSelected(false);
      }, 1500);
    }

    if (isMovedToBag) {
      setTimeout(() => {
        setIsMovedToBag(false);
      }, 1500);
    }
  }, [dispatch, isDeleted, isSizeNotSelected, isMovedToBag]);

  return (
    <>
    
      <div>
      
        {wishlistData.length !== 0 ? (
          <div>
            <br />
            <div className={"headingwish"}>

              <span className={"countFont"}>
              Items in the Wishlist  {" "}
                {wishlistData.length}</span>{" "}
            </div>

            <div className={"cardCont"}>
              {wishlistData.map((e, i) => (
                <div key={i} className={"card"}>
                  <div>
                    <img src={e.images.image1} alt="" width="100%" />
                  </div>
                  <div className={"cancelIcon"}>
                    <div className="wish-movement" onClick={() => handleDeleteWishlist(e.id)}> × </div>
                  </div>
                  <div className={"titleFont"}>{e.brand}</div>
                  <div className={"flexPrice"}>
                    <div className={"titleFont"}>₹{e.price}</div>
                    <div className={"mrpFont"}>₹{e.off_price}</div>
                    <div className={"discountFont"}>({e.discount}% OFF)</div>
                  </div>
                  <br />
                  <div>
                    <button
                      onClick={() => handleModelWishlist(e.id)}
                      className={`${"buttons"}`}
                    >
                      MOVE TO BAG
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Footer here */}
          </div>
        ) : (
          <div  className="wish-continue-shop" >
            <img src={wishlist} alt="Wishlist is empty" width="100%" />
              <Link to="/">
                <div  className="wish-continue-shop">
                  <button className={"btnCntShop"}>CONTINUE SHOPPING</button>
                  </div>
            </Link>
          </div>
        )}
      </div>
      {isDeleted && (
        <div className={`${"deleteDiv"}`}>
          <div>
            <img src={delProduct.images.image1} alt="" height="40px" />
          </div>
          <div className={"modelStyle"}>Item removed from wishlist</div>
        </div>
      )}
      {isSizeNotSelected && (
        <div className={`${"withoutSizeDiv"}`}>
          <div className={`${"borderRadius"} ${"marginTop"}`}>
            <img src={maxresdefault} alt="" height="36px" />
          </div>
          <div className={`${"marginTop"} ${"align"}`}>Size not selected</div>
        </div>
      )}
      {isMovedToBag && (
        <div className={`${"movedToBagDiv"}`}>
          <div>
            <img src={delProduct.images.image1} alt="" height="40px" />
          </div>
          <div className={"marginTop"}>Item successfully added to bag</div>

          <div>
            {" "}
            
            <Link to="/cart">
              <button className={"viewBagBtn"}>VIEW BAG</button>
            </Link>{" "}
          </div>
        </div>
      )}
      <div>
        <div>
          {wishlistModel &&
            wishlistModelArray.map((e, i) => (
              <div key={i}>
                <div
                  className={"modelBg"}
                  onClick={() => handleModelWishClose(e.id)}
                ></div>

                <div
                  onClick={handleModelWishRetain}
                  className={"modelCard"}
                  key={i}
                >
                  <div>
                    <div className={"flexModel"}>
                      <div>
                        <img src={e.images.image1} alt="" height="80px" />
                      </div>
                      <div className={`${"align"} ${"marginLeft"}`}>
                        <div className={`${"titleFont"} ${"font16"} ${"gray"}`}>
                          {e.title}
                        </div>
                        <div className="wish-flexsee">
                          <span className={`${"titleFont"} ${"font16"}`}>
                            {" "}
                            ₹{e.price}{" "}
                          </span>
                          <span className={`${"mrpFont"} ${"font16"}`}>
                            {" "}
                            ₹{e.off_price}
                          </span>
                          <span className={`${"discountFont"} ${"font16"}`}>
                            ({e.discount}% OFF){" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className={`${"titleFont"} ${"font16"} ${"align"}`}>
                      Select Size
                    </div>
                    <div className={"gridBtn"}>
                      {e.sizes.map((size, i) => (
                        <div key={i}>
                          <div
                            onClick={() => handleSizeSelect(e.id, size)}
                            className={
                              isSame == size
                                ? `${"sizeSelectedDiv"}`
                                : `${"sizeDiv"}`
                            }
                          >
                            <div>{size}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <br />
                    {isSizeSelected && (
                      <div className={"seller"}>
                        Store: <span> Myntra Retail Clone</span>{" "}
                      </div>
                    )}

                    <button
                      onClick={
                        isSizeSelected
                          ? () => handleMoveToBag(e.id)
                          : handleDoneWithoutSize
                      }
                      className={`${"doneBtn"} ${"font16"}`}
                    >
                      Done
                    </button>
                  </div>
                </div>

                <div className={"closeModel"}>
                  <div onClick={() => handleModelWishClose(e.id)}>
                    <span className={"wrongbackground"}> ×</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
