import React from 'react'
import {Card, Button} from 'react-bootstrap';


function ItemDetail({producto}) {
    const {pictureUrl , title , description, price, category} = producto
    return (
        <div className='container'>
            <br />
            <div className="row">
                <div className="col-lg-12">
                    <h2>{title}</h2>
                    <br />
                </div>
                <div className="col-lg-6">

                    <Card style={{ width: '40rem'}}>
                        <Card.Img variant="top" src={pictureUrl} />
                    </Card>

                </div>
                <div className="col-lg-6">
                    <Card.Body>
                        
                        <Card.Text>
                        {description}
                        </Card.Text>
                        <h4>
                        <br></br>
                        {price}
                        </h4>
                        <br></br>
                        <h3>
                        {category}
                        </h3>
                    </Card.Body>
                </div> 
            </div>
              
        </div>
    )
}

export default ItemDetail