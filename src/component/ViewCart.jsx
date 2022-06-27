import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import './ViewCart.css';
import { Link } from 'react-router-dom'
import {useContext} from 'react';
import {MiContexto} from '../context/CartContext';
import emptyCart from '../trolley.png'

function ViewCart() {

  const { totalInCart,cart, clear, totalPriceInCart, addItemQuantity, removeItemQuantity, removeItem } = useContext(MiContexto)




  return (
    Boolean(cart.length) ? (
      <div style={{paddingTop: "220px"}}>
        <div className="container">
          <div className="carder">
            <div className="row">
              <div className="col-lg-8 content-cart">
                <div className='content-title'>
                  <div className='title-cart-buy'>
                    <h3>Carrito de compra</h3>
                  </div>
                  <div className='item-counts'>
                    <h4>3 Items</h4>
                  </div>
                </div>
                <br />
                <div className='table-responsive contenedor'>
                    <table className='table table-cart'>
                      <thead>
                        <tr>
                          <th style={{width: '400px'}}>Detalle Producto</th>
                          <th>Cantidad</th>
                          <th >Precio</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          cart.map(pr =>(
                            <tr>
                              <td>
                                <div className='content-product'>
                                  <div className='content-img'>
                                    <img src={pr.pictureUrl} 
                                      className='img-product' 
                                      alt="" />
                                  </div>
                                  <div className='content-details'>
                                    <h6 className='pro'>{pr.title}</h6>
                                    <h6 className='cat'>{pr.category}</h6>
                                    <div>
                                      <button className='rem' onClick={()=>{
                                        removeItem(pr.id)
                                      } } >Remove</button>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className='quantity-cont'>
                                   <button className='btn qua min' onClick={ () =>{
                                    removeItemQuantity(pr)}
                                    }>-</button>
                                  <div className='qua count'>{pr.quantity}</div>
                                  <button className='btn qua plus' onClick={ () =>{
                                    addItemQuantity(pr)}
                                    }>+</button> 
                                </div>
                              </td>
                              <td className='price'>${pr.price}</td>
                              <td className='total'>${pr.price * pr.quantity}</td>
                            </tr>
                          ))
                        }
                        
                      </tbody>
                    </table>
                </div>
              </div>  
              <div className="col-lg-4 sumary-resume">
                <div className='content-sumary'>
                  <h3 className='summary'>Resumen de orden</h3>
                </div>
                <div className='summary-content'>
                  <div>
                    <br />
                    <h4>Cantidad de Productos ({totalInCart()})</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <table className='table-order'>
                      <tbody>
                        <tr>
                          <td className='amount-total'>TOTAL</td>
                          <td className='precio-total'>${totalPriceInCart()}</td>
                        </tr>
                      </tbody>
                      
                    </table>
                  </div>
                  <div>
                    <button className='btn btn-red'>Finalizar Compra</button>
                  </div>
                  <br></br>
                  <div>
                    <button className='btn btn-def-red' onClick={clear}>Vaciar Carrito</button>
                  </div>
                </div>

              </div> 
              
            </div>
            
          </div>
          <br/>
          <div className="row">
            <div className="col-lg-12">

              <Link to="/" className='next-buy'>
                <FaArrowLeft></FaArrowLeft> Seguir Comprando
              </Link>
            
            </div>
              
          </div>
        </div>
      </div>
    ) : (
      <>
        <div style={{paddingTop: "240px" , textAlign: "center" }}>
          <img src={emptyCart} alt="" width={200} />
          <br /><br /><br />
          <h4>Aun no tienes ningun producto en el carrito</h4>
          <br /><br />
          <Link className='btn btn-red2' to={'/'}>Empezar a comprar</Link>
        </div>
      </>
    )
  )
}

export default ViewCart