import React , {useState, useContext } from 'react'
import {Card} from 'react-bootstrap';
import ItemCount from './ItemCount';
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import { MiContexto } from '../context/CartContext';

function ItemDetail({producto}) {
    
    const [addedToCart, setAddedToCart] = useState(false);
    
    const { addItem, quantityInCart, removeItem } = useContext(MiContexto);

    const {id, pictureUrl , title , description, price, category , stock} = producto


    const onAdd = (cantidad) =>{
        if (cantidad > 0) {
            addItem({ ...producto, quantity: cantidad });
            setAddedToCart(true);
        } else {
            alert('Error al agregar al carrito: la cantidad no puede ser 0')
        }
    }

    const removeFromCart = () => {
        removeItem(id);
        setAddedToCart(false);
    }
    
    return (
        <div className='container' style={{paddingTop: "220px"}}>
            <br />
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="title-detail">{title}</h2>
                    <br />
                </div>
                <div className="col-lg-6 col-md-8 col-sm-8">

                    <Card >
                        <Card.Img className="detail-img" variant="top" src={"../"+pictureUrl} />
                    </Card>

                </div>
                <div className="col-lg-6 col-md-4 col-sm-4">
                    <Card.Body>
                        <Card.Text className="textos">
                        {description}
                        </Card.Text>
                        <Card.Text className="textos">
                        <span style={{ color: "#dc3545", fontWeight: "bolder", fontSize: '20px' }}>${price}</span>
                        </Card.Text>
                        <Card.Text className="textos">
                        <span style={{ fontWeight: "bolder", fontSize: '20px' }}>{category}</span>
                        </Card.Text>
                    </Card.Body>
                    {
                    !addedToCart && (
                        <ItemCount stock={stock} initial={0} onAdd={onAdd}/>
                    )}
                    {
                    addedToCart && (
                        <>
                        <br />

                        <Link className='btn border  btn-add-c'  to="/cart" >Ir al carro</Link>
                        <br /><br />
                        <button className='btn border  btn-add-c' onClick={removeFromCart} >Eliminar del carro</button>
                        </>
                    )}
                </div> 
            </div>
              
        </div>
    )
}

export default ItemDetail