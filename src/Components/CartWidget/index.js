import React from "react";
import "./style.css";
import shopping_cart from "../../assets/img/shopping-cart.png";

const CartWidget = () => {
    return ( 
        <button className = "cart-btn" >
        <img src = {shopping_cart} alt = "carrito Icon" className = "cart-widget" / >
        </button>
    );
};


export default CartWidget;