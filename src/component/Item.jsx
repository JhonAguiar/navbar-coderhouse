import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MiContexto } from '../context/CartContext';

const Item = ({producto}) => {
    const {pictureUrl , title , description, price, id} = producto
    const { darkMode } = useContext(MiContexto) 
    return (

            <div className="col-lg-3 col-md-6" style={{paddingTop: '50px' }}>
                <Card >
                    
                    <div id="padre">
                        <img className="card-img-top" variant="top"  src={pictureUrl} alt="Card image cap"/>
                        <div className="card-t">${price}</div>
                    </div>
                    
                    <Card.Body style={{backgroundColor: darkMode === false ? "#fff" : "#333"}}>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        {description}
                        </Card.Text>

                        <Link to={`/item/${id}`} style={{color: darkMode === false ? "#333" : "#fff"}}>Ver detalle del producto</Link> 
                        
                    </Card.Body>
                </Card>
            </div>
  )
}

export default Item