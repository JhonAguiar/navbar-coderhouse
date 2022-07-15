// @ts-nocheck
import { doc, getDoc, getFirestore  } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loading from "./Loading";


function ItemDetailContainer() {
    
    const { id } = useParams();
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        const coleccion = 'productos';
        const db = getFirestore();

        const  prod = doc(db, coleccion, id);

        getDoc(prod).then((res) =>{
            setProductos({...res.data(), id: res.id})
        }).catch((error) =>{
            setError(error);
        }).finally(() =>{
            setLoading(false);
        })

    }, [id]);


    return (
        <>
        {loading ?
                <Loading></Loading>
            :
                <ItemDetail producto={productos}/>
            
        }
        </>
        
       
    )
}

export default ItemDetailContainer