
import React , {useState} from 'react'
import './ItemCount.css'

function ItemCount({stock, initial, onAdd}) {

    console.log(stock)

    const [contador, setContador] = useState(initial);


    const handleClick = () =>{
        contador < stock ? setContador(parseInt(contador) + 1) : alert('No puedes agregar mas productos')

    }

    const handleClickDown = () =>{
        contador > initial ? setContador(parseInt(contador) - 1) : alert('No puedes quitar productos')
    }

    return (
        <div>
            <div className='pl'>
                <div>
                    <h6>Camisa tiger</h6>
                </div>
                <div>
                    <div className='container-car'>
                        <button className='btn text-primary size-btn' onClick={handleClickDown}>-</button>
                        <div className='number'>{contador}</div>
                        <button className='btn text-primary size-btn' onClick={handleClick}>+</button>
                    </div>
                    <div className='btn-add'>
                        <button className='btn border border-primary text-primary btn-add-c'  onClick={() => stock=== '' || stock == 0 ?  alert('No hay stock') :onAdd(contador)}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;
