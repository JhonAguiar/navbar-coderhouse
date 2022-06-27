import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {

    const {pictureUrl , title , description, price, id} = producto

    return (

            <div className="col-lg-3 col-md-6" style={{paddingTop: '50px' }}>
                <Card >
                    
                    <div id="padre">
                        <img className="card-img-top" variant="top"  src={pictureUrl} alt="Card image cap"/>
                        <div className="card-t">{price}</div>
                    </div>
                    
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        {description}
                        </Card.Text>

                        <Link to={`/item/${id}`}>Ver detalle del producto</Link> 
                        
                    </Card.Body>
                </Card>
            </div>
  )
}

export default Item