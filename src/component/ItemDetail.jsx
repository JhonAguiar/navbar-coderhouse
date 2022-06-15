import React from 'react'
import {Card, Button} from 'react-bootstrap';
import './ItemDetail.css'

function ItemDetail({producto}) {
    const {pictureUrl , title , description, price, category} = producto
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
                        <Card.Img variant="top" src={"../"+pictureUrl} />
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
                </div> 
            </div>
              
        </div>
    )
}

export default ItemDetail