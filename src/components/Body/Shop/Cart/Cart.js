import React from "react";

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prc) => total + prc.price, 0);

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }if(total > 15){
        shipping = 4.99;
    }else if(total > 0){
        shipping = 12.99
    };
    const tax = (total /10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2)
    const formatNumber = num => {
        const pricition = num.toFixed(2);
        return Number(pricition);
    }

    return (
        <div>
            <h4>Order summary</h4>
            <p>Items Ordered: {cart.length} </p>
            <p>Product Price: ${formatNumber(total)}</p>
            <p><small>Shipping Cost: ${shipping}</small></p>
            <p><small>Tex + Vat: ${tax}</small></p>
            <p>Total Price: ${grandTotal}</p>
        </div>
    );
};

export default Cart;
