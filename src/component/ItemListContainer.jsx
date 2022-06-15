
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

function ItemListContainer(props) {

  const onAdd = (cantidad) =>{
    alert(`sumaste ${cantidad} productos`)
  }

  const listado = [
    {id : 1, title : 'CAMISETA DE HOMBRE, MANGA CORTA REGULAR FIT BLANCA DE THE SIMPSONS ©FOX', description :'Camiseta de cuello redondo y manga corta. Detalle de estampación all over Homero Simpson ©FOX.', price : '$79', pictureUrl : camisaHomero, category : "camisetas"},
    {id : 2, title : 'BERMUDA DE HOMBRE, CAQUI DE RICK & MORTY: ANIMATED SERIES', description :'Bermuda de hombre, caqui de Rick & Morty: Animated Series', price : '$119', pictureUrl : bermudaRickMorty , category : "bermudas"},
    {id : 3, title : 'BUZO DE HOMBRE, MANGA LARGA REGULAR FIT AZUL DE STAR WARS: THE MANDALORIAN ©LUCASFILM LIMITED', description :'Buzo de cuello redondo y manga larga con puño en rib. Detalle de estampación en frente gráfico y texto combinado personaje The Child ©LUCASFILM LIMITED', price : '$139', pictureUrl : buzoBabyYoda, category : "buzos"},
    {id : 4, title : 'SANDALIA DE HOMBRE, RIDER NEGRA DE RICK AND MORTY', description :'Sandalia de hombre, rider negra de Rick and Morty', price : '$39', pictureUrl : sandaliasRickMorty, category : "sandalias"},
    {id : 5, title : 'CAMISETA GENDER NEUTRAL, MANGA CORTA REGULAR FIT BLANCA/NEGRA DE RICK & MORTY: ANIMATED SERIES', description :'Camiseta gender neutral, manga corta regular fit blanca/negra de Rick & Morty: Animated Series', price : '$99', pictureUrl : rickMorty, category : "camisetas"},
    {id : 6, title : 'BUZO DE HOMBRE, ABIERTO AMARILLO DE NARUTO', description :'Buzo de hombre, abierto amarillo de Naruto', price : '$199', pictureUrl : naruto, category : "buzos"},
    {id : 7, title : 'BUZO GENDER NEUTRAL, CERRADO REGULAR FIT NEGRO PRIDE DE DISNEY', description :'Buzo gender neutral, cerrado regular fit negro Pride de Disney', price : '$169', pictureUrl : mickey, category : "buzos"},
    {id : 8, title : 'CAMISETA DE HOMBRE, MANGA CORTA REGULAR FIT NEGRO DE JURASIC WORLD ©UNIVERSAL', description :'Camiseta de hombre, manga corta regular fit negro de jurasic world ©universal', price : '$86', pictureUrl : jurasic, category : "camisetas"},
    {id : 9, title : 'CAMISETA DE HOMBRE, MANGA CORTA REGULAR FIT NEGRO DE JURASIC WORLD ©UNIVERSAL', description :'Camiseta de hombre, manga corta regular fit negro de jurasic world ©universal', price : '$86', pictureUrl : jurasic, category : "camisetas"}
  ]

  const { id } = useParams();
  const [productos, setProductos] = useState([])

  useEffect(() => {

    const task = new Promise((res, rej) =>{
      setTimeout(() =>{
        if(id === undefined){
          res(listado);
        }else{
          res(listado.filter(e => e.category == id))
        }
          
      }, 2000)
    });

    task.then((res)=>{
      setProductos(res)
    })

    
  
  }, [listado])

  

  return (
    <div>
        {/* <span >{props.greeting}</span> */}
        {/* <ItemCount stock='10' initial='1' onAdd={onAdd}/> */}
        
        <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
