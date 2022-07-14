import React from 'react';
import "./Item.css";

const Item = ({item}) => {
  const { img, name, price, description, stock, category }=item;

  return (
    <div className="card">
    <img src={img} alt={name} width="300px" />
    <div className="card-body">
    <h2>{item.name}</h2>
    <p>${item.price}</p>
    <h3>{item.description}</h3>
    <h3>{item.category}</h3>
    </div>
</div>
  )
}


export default Item;