import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, clearHandleBtn, children }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    if (product.quantity === 0) {
      product.quantity = 1;
    }
    // product.quantity = product.quantity || 1;

    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (totalPrice * 7) / 100;

  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="bg-orange-200 h-96 w-76 pt-10">
      <div className="pl-5">
        <h3>Order Summary : </h3>
        <p>Selected Items : {quantity}</p>
        <p>Total Price : $ {totalPrice}</p>
        <p>Total Shipping Charge : $ {totalShipping}</p>
        <p>Tax : {tax.toFixed(2)}</p>
        <h6>Grand Total : ${grandTotal.toFixed(2)} </h6>
      </div>
      <button onClick={clearHandleBtn} className="cart-btn mt-5">
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      {children}
    </div>
  );
};

export default Cart;
