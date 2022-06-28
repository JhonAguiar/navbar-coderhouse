
import React , {useState, useEffect} from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import camisaHomero from '../assets/images/homero.webp'
import bermudaRickMorty from '../assets/images/bermuda-rick-morty.webp'
import buzoBabyYoda from '../assets/images/buzo-baby-yoda.webp'
import sandaliasRickMorty from '../assets/images/sandalias-rick-morty.webp'
import rickMorty from '../assets/images/rick-morty.webp'
import naruto from '../assets/images/narut.webp'
import mickey from '../assets/images/mickey.webp'
import jurasic from '../assets/images/jurasic-world.webp'
import {useParams} from 'react-router-dom';
import { doc, getDocs, getFirestore, collection} from "firebase/firestore"

function ItemListContainer(props) {


  const { id } = useParams();
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const coleccion = 'productos';
    const db = getFirestore();

    const prod = collection(db, coleccion);

    getDocs(prod).then((res) =>{
      let listado = res.docs.map(doc => ({id: doc.id, ...doc.data()}))
      console.log(listado, id)
      if(id === undefined){
        setProductos(listado)
      }else{
        setProductos(listado.filter(e => e.category == id))
      }
    })


    
  
  }, [id])

  

  return (
    <div>       
        <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
