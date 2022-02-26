import React from "react";
import Product from "./Product";

export default function Section(props) {
  let className;
  switch (props.imageList.length) {
    case 4:
      className = "four-fr";
      break;
    case 5:
      className = "five-fr";
      break;
    case 6:
      className = "six-fr";
      break;
  }
  return (
    <div>
      {props.imageList.map((image) => (
        <Product image={image} key={image} styleClass={className} />
      ))}
    </div>
  );
}
