import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import "./Orders.css";
import { Link } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  const handleBtn = (id) => {
    let remainCart = cart.filter((cart) => cart.id !== id);
    setCart(remainCart);
    removeFromDb(id);
  };
  const clearData = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="item-product">
        {cart.map((product) => (
          <ReviewItem
            product={product}
            key={product.id}
            handleBtn={handleBtn}
          ></ReviewItem>
        ))}
      </div>
      <div className="product-container">
        <Cart clearHandleBtn={clearData} cart={savedCart}>
          <div style={{ marginTop: "10px" }}>
            <Link
              to="/checkout"
              className="cart-btn"
              style={{ backgroundColor: "#FF9900" }}
            >
              <span>Proceed Checkout</span>
              <FontAwesomeIcon icon={faCheckDouble} />
            </Link>
          </div>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
