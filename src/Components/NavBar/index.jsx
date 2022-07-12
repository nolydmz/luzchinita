import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import "./styles.css";

const categories = [

    {
        id: 1,
        path: '/',
        label: "Home",
    },

    {
        id: 2,
        path: '/category/remeras',
        label: "Remeras",
    },
    {
        id: 3,
        path: 'category/busos',
        label: "Busos",
    }
];

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return ( 
        <div className="nav">
            <span className="nav-logo"> Luz Chinita </span> 
        <div className={`nav-items ${isOpen ? "open" : ""}`.trim()}> 
            {categories.map((category) => ( 
                <Link to={category.path} className="nav-item" key={category.id}> 
                {category.label} 
                </Link>
            ))} 
        </div> 
        <div className="cart">
            <CartWidget />
        </div>

        <div className="nav-mobile" >
            <div className = "cart-mobile" >
                <CartWidget />
            </div> 
            <div className={`nav-toggle ${isOpen ? "open" : ""}`.trim()}
                onClick = {() => setIsOpen((isOpen) => !isOpen)} >
            <div className = "bar" > </div> 
            </div> 
        </div> 
    </div>
    );
};

export default NavBar;