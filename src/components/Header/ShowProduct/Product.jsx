import React from "react";
import "./Product.css";
const Product = (props) => {
  console.log(props);
  const { price, img, name, ratings, seller, category } = props.product;
  return (
    <div className="cart-item">
      <img src={img} alt="" />
      <div className="cart-des">
        <h2 className="cart-title">{name}</h2>
        <p>Price : ${price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings} Star</p>
      </div>
      <button className="btn">Add to Cart</button>
    </div>
  );
};

export default Product;
