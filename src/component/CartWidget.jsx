
import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa';
import './CartWidget.css'


function CartWidget(props) {


  return (
    <div className='cart-widget'>
        <div className='text-icon'><FaCartArrowDown viewBox='0 0 576 400'  color="#fff" /></div>
        {
          props.valor != 0 && (
          <div className='text-car'>{props.valor}</div>
          )
        }
    </div>
  );
}

export default CartWidget;
