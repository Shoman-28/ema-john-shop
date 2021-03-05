import React from "react";
import './ReviewItem.css'

const ReviewItems = (props) => {
    const { name, quantity } = props.product;

    return (
        <div className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>quantity: {quantity}</p>
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItems;
