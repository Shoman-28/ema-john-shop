import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
    const { name, price, img, seller, stock, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" srcset="" />
            </div>
            <div>
                <h5 className="prodact-name">
                    <Link to={"/product/" + key}>to: {name}</Link>
                </h5>
                <br />
                <p>by: {seller}</p>
                <h5>${price}</h5>
                <p>
                    <small>Only {stock} left in stock - Order soon</small>
                </p>
                {props.showAddToCart && <button
                    className="main-button"
                    onClick={() => props.hendelAdProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>}
            </div>
        </div>
    );
};

export default Product;
