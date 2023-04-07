import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleBtn }) => {
  const { price, img, name, quantity, ratings, id } = product;
  return (
    <div className="review-container">
      <img src={img} alt="" />
      <div className="review-info">
        <p>{name}</p>
        <p>
          Price: <span style={{ color: "#FF9900" }}>${price}</span>
        </p>
        <p>
          Quantity : <span style={{ color: "#FF9900" }}>{quantity}</span>
        </p>
      </div>
      <button onClick={() => handleBtn(id)} className="btns">
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewItem;
