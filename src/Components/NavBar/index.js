import React, {
    useState
} from "react";
import CartWidget from "../CartWidget";
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
    const [isOpen, setIsOpen] = useState(false);
    return ( 
        <div className="nav">
            <span className="nav-logo"> Luz Chinita </span> 
        <div className={`nav-items ${isOpen ? "open" : ""}`.trim()}> 
            {menuItems.map((item) => ( 
                <a href="/" className="nav-item" key={item.id}> 
                {item.label} 
                </a>
            ))} 
        </div> 
        <div className="cart">
            <CartWidget />
        </div>

        <div className="nav-mobile" >
            <div className = "cart-mobile" >
                <CartWidget />
            </div> 
            <div 
                className={`nav-toggle ${isOpen ? "open" : ""}`.trim()}
                onClick = {() => setIsOpen((isOpen) => !isOpen)} 
                >
            <div className = "bar" > </div> 
            </div> 
        </div> 
    </div>
    );
};

export default NavBar;