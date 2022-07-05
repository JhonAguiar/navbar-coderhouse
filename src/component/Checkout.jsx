import React , {useState, useContext} from 'react'
import { MiContexto } from '../context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import {Link} from 'react-router-dom';
import emptyCart from '../trolley.png';



function Checkout() {

    const { totalInCart,cart, clear, totalPriceInCart, addItemQuantity, removeItemQuantity, removeItem } = useContext(MiContexto)

    const db = getFirestore();
    const orderCollection = collection(db, 'orders' )

    const [form, setForm]  = useState({});

    const total = totalInCart();

    const handleClick = () =>{
        const order = {
            buyer: {name: form.name, email: form.email,phone: form.phone},
            items: cart,
            total,
        };

        addDoc(orderCollection, order).then(({id}) =>{
            console.log(id)
        })
    }

    const handleChange = (e) =>{
        setForm({
            ...form, [e.target.name]:e.target.value
        })
    }

    return (
        Boolean(cart.length) ? (
            <div style={{paddingTop: '250px'}}>
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
                                    
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className='quantity-cont' style={{'justifyContent' : 'center'}}>
                                   <div >&nbsp;</div>
                                  <div className='qua count'>{pr.quantity}</div>
                                  <div >&nbsp;</div> 
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
                    <h3 className='summary'>Datos del comprador</h3>
                    </div>
                    <div className='summary-content'>
                    <div>
                        <br />
                        <div className="row">
                            <div className="col-lg-12">
                                <input type="text" name="name" placeholder='Ingrese su nombre' className='form-control' onChange={handleChange}/>
                                <br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <input type="text" name="phone" placeholder='Ingrese su telefono' className='form-control' onChange={handleChange}/>
                                <br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <input type="text"name="email" placeholder='Ingrese su email' className='form-control' onChange={handleChange}/>
                                <br />
                            </div>
                        </div>
                        
                    
                        
                    </div>
                    </div>
                    <div>
                    <div>
                        <table className='table-order'>
                        <tbody>
                            <tr>

                            </tr>
                        </tbody>
                        
                        </table>
                    </div>
                    <div>
                        <button className='btn btn-red' onClick={handleClick}>Finalizar Compra</button>
                    </div>
                    </div>

                </div> 
                
                </div>
                
            </div>
            <br/>
            <div className="row">
                <div className="col-lg-12">


                
                </div>
                
            </div>
            </div>


                {/* <h1>COMPLETE PARA TERMINAR LA COMPRA</h1>
                <input type="text" name="name" placeholder='Ingrese su nombre' onChange={handleChange}/>
                <input type="text" name="phone" placeholder='Ingrese su telefono' onChange={handleChange}/>
                <input type="text"name="email" placeholder='Ingrese su email' onChange={handleChange}/>
                <button onClick={handleClick}>TERMINAR COMPRA</button> */}
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

export default Checkout