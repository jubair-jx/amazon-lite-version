import React, { useEffect, useState } from "react";
import Product from "../Header/ShowProduct/Product";
import "./shop.css";

const Shop = () => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const cartHandler = (product) => {
    let newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="shop-items">
        {products.map((product) => (
          <Product
            key={product.id}
            cartHandler={cartHandler}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="cart-items">
        <h3>Order Summary : </h3>
        <p>Selected Items : {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
