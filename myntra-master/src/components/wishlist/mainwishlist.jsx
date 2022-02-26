import React from "react";
import { useSelector } from "react-redux";
import { Wishlist } from "./wishlist";
import "./wishlist.css";
import { useNavigate } from "react-router-dom";

export const WishlistMainPage = () => {
  const userAuth = useSelector((state) => state.loginred.userAuth);
  const navigate = useNavigate("");
  return userAuth ? (
    <div className={"navMargin"}>
      <Wishlist />
    </div>
  ) : (
    <>{navigate("/login")}</>
  );
};
