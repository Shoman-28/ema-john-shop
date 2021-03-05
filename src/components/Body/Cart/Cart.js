import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prc) => total + prc.price, 0);

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    if (total > 15) {
        shipping = 4.99;
    } else if (total > 0) {
        shipping = 12.99;
    }
    const tax = total / 10;
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formatNumber = (num) => {
        const pricition = num.toFixed(2);
        return Number(pricition);
    };

    return (
        <div>
            <h4>Order summary</h4>
            <p>Items Ordered: {cart.length} </p>
            <p>Product Price: ${formatNumber(total)}</p>
            <p>
                <small>Shipping Cost: ${shipping}</small>
            </p>
            <p>
                <small>Tex + Vat: ${formatNumber(tax)}</small>
            </p>
            <p>Total Price: ${grandTotal}</p>
            <Link to="/review">
                <button className="main-button">
                    <FontAwesomeIcon icon={faShoppingCart} /> Review Order
                </button>
            </Link>
        </div>
    );
};

export default Cart;
