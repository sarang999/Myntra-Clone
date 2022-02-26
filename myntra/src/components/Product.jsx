import React from "react";

export default function Product(prop) {
  return <img src={prop.image} className={prop.styleClass} />;
}
