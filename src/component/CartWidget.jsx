
import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa';
import './CartWidget.css'


function CartWidget(props) {


  return (
    <div>
        
        <FaCartArrowDown color="white" fontSize="2.5em"/>
        <span className='text-car'>{props.valor}</span>
    </div>
  );
}

export default CartWidget;
