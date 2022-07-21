import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/cartContext';
import "./Item.css";

const Item = ({item}) => {
  const { cart } = useContext(CartContext);
  //const { img, name, price, description, stock, category }=item;
  const isInCart = cart.some((prod) => prod.id === item.id);

  return (
    <div className="card">
    <img src={item.img} alt="producto" />
    <div className="card-body">
    <h2>{item.name}</h2>
    <p>${item.price}</p>
    <h3>{item.description}</h3>
    <h3>{item.category}</h3>
    <Link className="detalle" to={`/detail/${item.id}`}>VER DETALLE</Link>
    </div>
    {isInCart && <h2>Ya está en el carrito</h2>}
</div>
  )
}


export default Item;