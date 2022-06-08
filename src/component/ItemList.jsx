import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <div className='container'>
        <div className='row'>
            {productos?.map(producto => <Item  key={producto.id} producto={producto} />)}
        </div>
    </div>
  )
}

export default ItemList