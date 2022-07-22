import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProd } from "../../mocks/products";
import ItemDetail from "../ItemDetail/index";
import { db } from "../../firebase/firebase";
import {doc, getDoc, collection} from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { productId } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, "productos");
        const refDoc = (productsCollection,productId)
        getDoc(refDoc).then(result => {
            setProduct(result.data())
        })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [productId]);

    return (
        <div>
            {loading ? (
            <h2>Cargando...</h2>) : (
                <>
                    <ItemDetail product={product} />
                </>
            )}
        </div>
    );
};

export default ItemDetailContainer;