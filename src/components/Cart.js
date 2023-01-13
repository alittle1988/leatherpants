import React from "react";
import { Button } from "react-bootstrap";

export default function Cart(props) {
  const { cart, onCartView, onDeleteFromCart } = props;
  let totalPrice = 0;
  cart.forEach((item) => (totalPrice += item.price));
  return (
    <>
      <div className="cartContainer">
        <div className="cartTitle">
          <h4>Cart</h4>
          <h4 onClick={onCartView} className="close">
            X
          </h4>
        </div>

        {cart.map((item, key) => (
          <>
            <div className="itemContainer" key={key}>
              <div className="cartItem">
                <img src={item.img} alt={item.description} />
                <p>Name: {item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Description:{item.description}</p>
              </div>
              <Button  className="deleteBtn" onClick={() => onDeleteFromCart(item)}>Delete</Button>
            </div>
            <hr></hr>
          </>
        ))}
        <div className="totalCheckout">
          <h4>Total: ${totalPrice}</h4>
          <Button className="btn-dark">Checkout</Button>
        </div>
      </div>
    </>
  );
}
