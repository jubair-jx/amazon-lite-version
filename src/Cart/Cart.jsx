import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping += product.shipping;
  }
  let tax = (totalPrice * 7) / 100;
  let grandTotal = totalPrice + tax + totalShipping;
  return (
    <div className="carts">
      <h3>Order Summary : </h3>
      <p>Selected Items : {cart.length}</p>
      <p>Total Price : $ {totalPrice}</p>
      <p>Total Shipping Charge : $ {totalShipping}</p>
      <p>Tax : {tax.toFixed(2)}</p>
      <h6>Grand Total : ${grandTotal.toFixed(2)} </h6>
    </div>
  );
};

export default Cart;
