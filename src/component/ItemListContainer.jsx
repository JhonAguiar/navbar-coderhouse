
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Loading from './Loading';

function ItemListContainer(props) {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const coleccion = 'productos';
    const db = getFirestore();
    const prod = collection(db, coleccion);

    if(id){
      const q = query(prod, where('category', '==', id))

      getDocs(q).then((res) =>{
        setProductos(res.docs.map(doc => ({id: doc.id, ...doc.data()})))
      }).catch((error) =>{
        setError(error);
      }).finally(() =>{
        setLoading(false);
      })  
    }else{
      getDocs(prod).then((res) =>{
        setProductos(res.docs.map(doc => ({id: doc.id, ...doc.data()})))
      }).catch((error) =>{
        setError(error);
      }).finally(() =>{
        setLoading(false);
      })
    }   

  }, [id])

  

  return (
    <div>
      <>
        {loading ?
                <Loading></Loading>
            :
            <ItemList productos={productos} />
            
        }
        </>     
        
    </div>
  );
}

export default ItemListContainer;
