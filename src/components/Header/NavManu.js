import React from "react";
import './NavManu.css';

const NavManu = () => {
    return (
        <nav className="navManu">
            <a href="/shop">Shop</a>
            <a href="/review">Order Revew</a>
            <a href="/inventory">Manage Inventory</a>
        </nav>
    );
};

export default NavManu;
