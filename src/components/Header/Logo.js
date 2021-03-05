import React from "react";
import logo from "./logo.png";

const image = {
    // cx\
    height: "80px",
};
const Logo = () => {
    return (
        <div style={{textAlign:'center'}}>
            <img style={image} src={logo} alt="" />
        </div>
    );
};

export default Logo;
