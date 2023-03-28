import React, { useEffect, useState } from "react";
import Cart from "../../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
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
  useEffect(() => {
    const localStoreCart = getShoppingCart();
    //step-01 get id using loop
    for (const id in localStoreCart) {
      //step-02 get the product using id
      const addProduct = products.find((product) => product.id === id);
      //step-03 get the quantity of the project
      const quantity = localStoreCart[id];
      addProduct.quantity = quantity;
      console.log(addProduct);
    }
  }, [products]);
  const cartHandler = (product) => {
    let newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
