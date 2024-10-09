

import React, { useEffect, useState } from "react";
import productsArray from "./../data/products.js";
import Item from "./Item"; 

function ItemListContainer({ renderMsg }) {
    const [Items, setItems] = useState([]);

    const getProducts = () => new Promise((res, rej) => {
        if (productsArray.length === 0) {
            rej("No hay productos :(");
        }

        setTimeout(() => {
            res(productsArray);
        }, 1000);
    });

    useEffect(() => {
        getProducts()
            .then(res => setItems(res))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <div>
                <h2>{renderMsg}</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {Items.map(item => (
                        <Item key={item.id} product={item} /> 
                    ))}
                </div>
            </div>
        </>
    );
}

export default ItemListContainer;
