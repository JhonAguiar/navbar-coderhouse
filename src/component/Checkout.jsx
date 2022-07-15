import React , {useState, useContext} from 'react'
import { MiContexto } from '../context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import {Link, useNavigate } from 'react-router-dom';
import emptyCart from '../trolley.png';



function Checkout() {

    const { totalInCart,cart, clear, darkMode } = useContext(MiContexto)

    const db = getFirestore();
    const orderCollection = collection(db, 'orders' )
    const navigate = useNavigate();
    const [form, setForm]  = useState({});
    const [errorMessages, setErrorMessages]  = useState({});
    const total = totalInCart();

    const validate = () => {
        let errors = {}
        let validityStatus = true

        if(form.email !== undefined){
            if(form.email.indexOf('@') === -1){
                validityStatus = false
                errors["email"] = "El email debe contener @"
            }

            if(form.email === ''){
                validityStatus = false
                errors["email"] = "El email no puede ser vacio"
            }
        }else{
            validityStatus = false
            errors["email"] = "El email no puede ser vacio"
        }

        if(form.name !== undefined){
            if(form.name === ''){
                validityStatus = false
                errors["name"] = "El nombre no puede ser vacio"
            }else if (form.name.length <= 10){
                validityStatus = false
                errors["name"] = "El nombre debe contener mas de 10 caracteres"
            }
        }else{
            validityStatus = false
            errors["name"] = "El nombre no puede ser vacio"
        }

        if(form.phone === undefined){
            validityStatus = false
            errors["phone"] = "El telefono no puede ser vacio"
        }else if(form.phone === ''){
            validityStatus = false
            errors["phone"] = "El telefono no puede ser vacio"
        }
        
        setErrorMessages(errors)
        return validityStatus
    }

    const handleClick = (e) =>{
        

        if (validate()){
            const order = {
                buyer: {name: form.name, email: form.email,phone: form.phone},
                items: cart,
                total,
            };

            addDoc(orderCollection, order).then(({id}) =>{
                clear()
                navigate('/')
            })
        }

       
    }

    const handleChange = (e) =>{
        setForm({
            ...form, [e.target.name]:e.target.value
        })
    }

    return (
        Boolean(cart.length) ? (
            <div style={{paddingTop: '250px' , background: darkMode === false ? "#fff" : "#000"}}>
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
                                    <tr key={pr}>
                                        <td style={{color: darkMode === false ? "#333" : "#fff"}}>
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
                                        <td style={{color: darkMode === false ? "#333" : "#fff"}}>
                                            <div className='quantity-cont' style={{color: darkMode === false ? "#333" : "#fff" , justifyContent : 'center'}}>
                                            <div >&nbsp;</div>
                                            <div className='qua count' style={{color: darkMode === false ? "#333" : "#fff"}}>{pr.quantity}</div>
                                            <div >&nbsp;</div> 
                                            </div>
                                        </td>
                                        <td className='price' style={{color: darkMode === false ? "#333" : "#fff"}}>${pr.price}</td>
                                        <td className='total' style={{color: darkMode === false ? "#333" : "#fff"}}>${pr.price * pr.quantity}</td>
                                    </tr>
                                ))
                                }
                                </tbody>
                                </table>
                            </div>
                        </div>  
                        <div className="col-lg-4 sumary-resume">
                            <div className='content-sumary'>
                                <h3 className='summary' style={{color: darkMode === false ? "#333" : "#333"}}>Datos del comprador</h3>
                            </div>
                            <div className='summary-content'>
                                <div>
                                    <br />
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <input type="text" name="name" placeholder='Ingrese su nombre' className='form-control' onChange={handleChange}/>
                                            <p style={{color: "red"}}>{errorMessages.name}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <input type="text" name="phone" placeholder='Ingrese su telefono' className='form-control' onChange={handleChange}/>
                                            <p style={{color: "red"}}>{errorMessages.phone}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <input type="text"name="email" placeholder='Ingrese su email' className='form-control' onChange={handleChange}/>
                                            <p style={{color: "red"}}>{errorMessages.email}</p>
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