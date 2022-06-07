
import React from 'react'
import ItemCount from './ItemCount';


function ItemListContainer(props) {

  const onAdd = (cantidad) =>{
    alert(`sumaste ${cantidad} productos`)

  }

  return (
    <div>
        {/* <span >{props.greeting}</span> */}
        <ItemCount stock='10' initial='1' onAdd={onAdd}/>
    </div>
  );
}

export default ItemListContainer;
