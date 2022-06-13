import React from 'react'
import {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {
  
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const getItem = async () => {
            await fetch("./Productos.json")
            .then(response => response.json())
            .then(data => setProductos(data[0]));
        };


        const timer = setTimeout(() => {
            getItem();
        }, 2000);
    }, []);


    return (
        <ItemDetail producto={productos}/>
    )
}

export default ItemDetailContainer