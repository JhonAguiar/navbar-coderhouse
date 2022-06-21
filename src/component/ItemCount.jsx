
import React , {useState} from 'react'
import './ItemCount.css'

function ItemCount({stock, initial, onAdd}) {


    const [itemCount, setItemCount] = useState(initial)

    const addItem = () => {
      if (itemCount < stock) {
        setItemCount( Number(itemCount) + 1 );
      }
    }
  
    const removeItem = () => {
      if (itemCount > 0) {
        setItemCount( Number(itemCount) - 1 );
      }
    }

    return (
        <div>
            <div className='pl'>

                <div>
                    <div className='container-car'>
                        <button className='btn text-primary size-btn' onClick={removeItem} disabled={itemCount === 0}>-</button>
                        <div className='number'>{itemCount}</div>
                        <button className='btn text-primary size-btn' onClick={addItem} disabled={itemCount === stock}>+</button>
                    </div>
                    <div className='btn-add'>
                        <button 
                            disabled={itemCount === 0}
                            className='btn border border-primary text-primary btn-add-c' 
                            onClick={() => onAdd(itemCount)}
                        >
                            Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;
