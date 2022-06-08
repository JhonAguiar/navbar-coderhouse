import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Item = ({producto}) => {

    const {pictureUrl , title , description, price} = producto

    return (

            <div class="col-lg-3" style={{paddingTop: '50px' }}>
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={pictureUrl} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        {description}
                        </Card.Text>
                        <Card.Text>
                        {price}
                        </Card.Text>
                        <Button variant="primary">Ver detalle del producto</Button>
                    </Card.Body>
                </Card>
            </div>
  )
}

export default Item