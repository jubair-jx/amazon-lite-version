import React from "react";
import "./Product.css";
const Product = (props) => {
  console.log(props);
  const { price, img, name, rating, seller, category } = props.product;
  return (
    <div className="cart-items">
      <img src={img} alt="" />
    </div>
  );
};

export default Product;
