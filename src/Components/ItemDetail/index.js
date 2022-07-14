import "./ItemDetail.css";
import React from  "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
    return (
        <div className="detail">
            <img src={product.imag} alt={product.name} width="400" />
            <div>
                <h1>{product.name}</h1>
                <h2>{product.description}</h2>
                <h3>$ {product.price}</h3>
                <h4>Stock: {product.stock}</h4>
                <ItemCount stock={product.stock} initial={1} />
            </div>
            <ItemCount />
        </div>
    );
};

export default ItemDetail;