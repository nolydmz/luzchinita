import React from 'react';
import { Link } from 'react-router-dom';
import "./Item.css";


const Item = ({item}) => {
  const {img, name, price, description, stock, category}= productos

  return (
    <div className="card">
    <img src={img} alt={name} width="200px" />
    <div className="card-body">
    <h2>{item.name}</h2>
            <p>${item.price}</p>
            <Link to={`/detail/${item.id}`}>Ver detalle</Link>
    </div>
    <Link a={'/detail/${item. id}'}>Ver detalle</Link>
</div>
  )
}

export default Item