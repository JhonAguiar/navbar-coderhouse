import React from 'react'
import Item from './Item'
import './ItemList.css'

const ItemList = ({productos}) => {
  return (
    <div className='container' style={{paddingTop: "200px"}}>
        <div className='row'>
            {/* {productos?.map(producto => <Item  key={producto.id} producto={producto} />)} */}
        </div>
    </div>
  )
}

export default ItemList