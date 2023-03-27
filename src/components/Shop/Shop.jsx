import React, { useEffect, useState } from "react";
import Product from "../Header/ShowProduct/Product";
import "./shop.css";

const Shop = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="shop-items">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div className="cart-items">
        <h3>Cart Items Here</h3>
      </div>
    </div>
  );
};

export default Shop;
