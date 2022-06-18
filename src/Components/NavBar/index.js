import React from "react";
import "./styles.css";

const menuItems = [
    {
        id: 1,
        label: "Catalogo",
    },
    
    {
        id: 2,
        label: "Nosotros",
    },
    {
        id: 3,
        label: "Registrate",
    }
];

const NavBar = () => {
    return (
        <div className="nav">
            <h1 className="nav-logo">Luz Chinita</h1>
            <div>
                {menuItems.map((items)=>(
                    <a href="/" className="nav-item" key = {items.id}>
                        {items.label}
                    </a>
                ))}
                
            </div>
        </div>
    )
};

export default NavBar;