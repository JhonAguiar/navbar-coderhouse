import React , {useState } from 'react'
import {Card, Button} from 'react-bootstrap';
import ItemCount from './ItemCount';
import './ItemDetail.css'
import { Link } from 'react-router-dom';

function ItemDetail({producto}) {
    
    const [addedToCart, setAddedToCart] = useState(false);
 
    const {pictureUrl , title , description, price, category , stock} = producto

    const addItem = ( producto ) => {

        let newCart = [];
    
        newCart = newCart.concat(producto);

    }

    const onAdd = (cantidad) =>{
        if (cantidad > 0) {
            addItem({ ...producto, quantity: cantidad });
            setAddedToCart(true);
        } else {
            alert('Error al agregar al carrito: la cantidad no puede ser 0')
        }
    }
    return (
        <div className='container' style={{paddingTop: "220px"}}>
            <br />
            <div className="row">
                <div className="col-lg-12">
                    <h2>{title}</h2>
                    <br />
                </div>
                <div className="col-lg-6">

                    <Card >
                        <Card.Img className="detail-img" variant="top" src={"../"+pictureUrl} />
                    </Card>

                </div>
                <div className="col-lg-6">
                    <Card.Body>
                        <Card.Text>
                        {description}
                        </Card.Text>
                        <Card.Text>
                        {price}
                        </Card.Text>
                        <Card.Text>
                        {category}
                        </Card.Text>
                    </Card.Body>
                    {
                    !addedToCart && (
                        <ItemCount stock={stock} initial={0} onAdd={onAdd}/>
                        )}
                    {
                    addedToCart && (
                        <>
                        <Link className='btn border border-primary text-primary btn-add-c'  to="/cart" >Finalizar compra</Link>
                        </>
                        
                        

                    )}
                </div> 
            </div>
              
        </div>
    )
}

export default ItemDetail