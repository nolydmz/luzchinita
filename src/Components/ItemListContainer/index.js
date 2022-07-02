import ItemCount from "../ItemCount/ItemCount";
import React, { useEffect, useState } from "react";

import "./styles.css";

export const ItemListContainer = ({texto}) => {
  
  const onAdd = (quantity) => {
      console.log(`Compraste $(quantity) unidades`);
  }

  return (
    <>
        <title greeting={texto} />
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </>
  )
}

export default ItemListContainer;