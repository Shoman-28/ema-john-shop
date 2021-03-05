import React from "react";
import { useParams } from "react-router";
import fakeData from "../../../fakeData";
import Product from "./Product";

const ProductDatels = () => {
    const { productKey } = useParams();
    const product = fakeData.find((pd) => pd.key === productKey);
    return (
        <div>
            <h4>This is a shoman</h4>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDatels;
