import React from "react";
import "./style.css";
import shopping_cart from "../../assets/img/img/shopping-cart.png";

const CartWidget = () => {
    return ( 
        <div>
        <button className = "cart-btn" >
        <img src = {shopping_cart} alt = "carrito Icon" className = "cart-widget" />
        </button>
        <div className="boton">
            <span className="button__badge">0</span>
        </div>
        </div>
    );
};


export default CartWidget;