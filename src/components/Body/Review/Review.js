import React, { useEffect, useState } from "react";
import fakeData from "../../../fakeData";
import { getDatabaseCart } from "../../../utilities/databaseManager";
import ReviewItems from "./ReviewItem/ReviewItems";

const Review = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);

        const cartProduct = productKeys.map((key) => {
            const product = fakeData.find((pd) => pd.key === key);
            product.quantity = saveCart[key];

            return product;
        });
        setCart(cartProduct);
        // console.log(cartProduct);
    });
    return (
        <div>
            <h1>Cart Items: {cart.length}</h1>
            {cart.map((pd) => (
                <ReviewItems product={pd}></ReviewItems>
            ))}
        </div>
    );
};

export default Review;
