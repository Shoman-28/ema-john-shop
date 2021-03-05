import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Product.css";

const Product = (props) => {
    console.log(props.product);
    const { name, price, img, seller, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" srcset="" />
            </div>
            <div>
                <h5 className="prodact-name">{name}</h5>
                <br />
                <p>by: {seller}</p>
                <h5>${price}</h5>
                <p>
                    <small>Only {stock} left in stock - Order soon</small>
                </p>
                <button className="main-button" onClick={() => props.hendelAdProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;
