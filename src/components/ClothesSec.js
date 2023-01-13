import React from "react";
import { Card, Button } from "react-bootstrap";


const checkOutFunc =() => {

}



export default function ClothesSec(props) {
    const {price, name, description, img, onAddToCart, info} = props
    return (
        <Card className="card">
            <Card.Img className="cardImg" variant="top" src={img} style={{height:300}} />
            <hr></hr>
            <Card.Body className="cardBody">
                <Card.Title>Item: {name}</Card.Title>
                <Card.Text>Price:$ {price}</Card.Text>
                <Card.Text>Description: {description}</Card.Text>
                <Button onClick={()=>onAddToCart(info)}>Add To Cart</Button>
            </Card.Body>
        </Card>
    )
}