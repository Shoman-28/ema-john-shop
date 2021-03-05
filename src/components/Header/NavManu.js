import React from "react";
import './NavManu.css';

const NavManu = () => {
    return (
        <nav className="navManu">
            <a href="/shop">Shop</a>
            <a href="/revew">Order Revew</a>
            <a href="/manage">Manage Inventory</a>
        </nav>
    );
};

export default NavManu;
