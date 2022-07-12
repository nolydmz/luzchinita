import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProds } from "../../mocks/products";
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();
    //console.log(parametro.categoryId);

    useEffect(() => {
        setLoading(true);
        getProds(categoryId)
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            }); 
    }, [categoryId]);

    return (
        <div>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <>
                    <ItemList items={products} />
                </>
            )}
        </div>
    )
};

export default ItemListContainer;