import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  const eventHandlerbtn = props.cartHandler;

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
      <button onClick={() => eventHandlerbtn(props.product)} className="btn">
        Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
