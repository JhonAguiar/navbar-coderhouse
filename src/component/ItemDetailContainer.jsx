// @ts-nocheck
import React from 'react'
import {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { Link, useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore} from "firebase/firestore"


function ItemDetailContainer() {
    
    const { id } = useParams();
    const [productos, setProductos] = useState([])

    useEffect(() => {

        const coleccion = 'productos';
        const db = getFirestore();

        const  prod = doc(db, coleccion, id);

        getDoc(prod).then((res) =>{
            setProductos({...res.data(), id: res.id})
        })


        // const getItem = async () => {
        //     await fetch("../Productos.json")
        //     .then(response => response.json())
        //     .then(data => setProductos(   data.find(el => el.id === parseInt(id))));
        // };

        // const timer = setTimeout(() => {
        //     getItem();
        // }, 2000);
    }, [id]);


    return (
        <ItemDetail producto={productos}/>
    )
}

export default ItemDetailContainer