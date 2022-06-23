
import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa';
import './CartWidget.css'


function CartWidget(props) {


  return (
    <div>
        
        <div className='text-icon'><FaCartArrowDown  color="#777" fontSize="1.4em"/></div>
        <div className='text-car'>{props.valor}</div>
    </div>
  );
}

export default CartWidget;
