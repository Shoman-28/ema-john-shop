import React from "react";
import "./Shop.css";
import { useState } from "react";
import fakeData from "../../../fakeData";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";

const Shop = () => {
    const product10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(product10);
    const [cart, setCart] = useState([]);

    const hendelAdProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                    {products.map(pd => 
                        <Product product={pd} hendelAdProduct={hendelAdProduct}></Product>
                    )}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;
