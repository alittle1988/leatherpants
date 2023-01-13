import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header.js";
import ClothesSec from "./components/ClothesSec.js";
import Cart from "./components/Cart.js";
import Statements from "./components/Statements.js";
import Footer from "./components/Footer.js"

const pants = [
  {
    name: "black Assless Pants",
    price: 59.99,
    img: "https://i.etsystatic.com/32153014/r/il/b7e065/3681200049/il_1588xN.3681200049_6afh.jpg",
    description: "All black assless leather pants",
    category: "Men",
  },
  {
    name: "Orange Assless Pants",
    price: 69.99,
    img: "https://i.etsystatic.com/7946158/r/il/deaf54/1746677369/il_1588xN.1746677369_pvpz.jpg",
    description: "All red assless leather pants",
    category: "Men",
  },
  {
    name: "blue Assless Pants",
    price: 69.99,
    img: "https://cdn11.bigcommerce.com/s-vhfmocasxz/images/stencil/original/products/1225/1379/IMG_2744__76637.1606504061.png?c=2",
    description: "All blue assless leather pants",
    category: "Men",
  },
  {
    name: "Black Assless Pants",
    price: 59.99,
    img: "https://i.etsystatic.com/20035697/r/il/f57933/3470881935/il_fullxfull.3470881935_jq0o.jpg",
    description: "All black assless leather pants",
    category: "Women",
  },
  {
    name: "Red Assless Pants",
    price: 69.99,
    img: "https://di2ponv0v5otw.cloudfront.net/posts/2019/10/20/5dac97c979df277ec861a19f/m_5dac9833b146ccd6e742f111.jpg",
    description: "All red assless leather pants",
    category: "Women",
  },
  {
    name: "Multi-Colored Assless Pants",
    price: 69.99,
    img: "https://i.etsystatic.com/8464190/r/il/2e39b7/3132654423/il_fullxfull.3132654423_bvqy.jpg",
    description: "multi-colored assless leather pants",
    category: "Women",
  },
];

const mens = pants.filter((pant) => pant.category === "Men");
const womens = pants.filter((pant) => pant.category === "Women");

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartView, setCartView] = useState(false);

  const handleAddToCart = (item) => {
    const array = [...cart, item];
    setCart(array);
    setCartCount(array.length)
    if(item.category === "Men") {
      alert("Gay")
    } else {
      alert("Straight")
    }
  };

  const handleDeleteFromCart = (item) => {
    const array = [...cart];
    let index = array.indexOf(item)
    array.forEach((cartItem) => {
      if(cartItem.name === item.name) {
        array.splice(index, 1)
      }
    })
    setCart(array)
    setCartCount(array.length)
  }

  const handleCartView = () => {
    setCartView(!cartView);

  };

  return (
    <div className="app">
      <Header onCartView={handleCartView} cartCount={cartCount}/>
      <Container>
        {cartView ? (
          <Cart cart={cart} onCartView={handleCartView} onDeleteFromCart={handleDeleteFromCart}></Cart>
        ) : (
          <div></div>
        )}
        <div className="h2 mt-5 text-white">Women's</div>
        <hr></hr>
        <Row className="womensRow pt-5">
          {womens.map((women, key) => (
            <Col md={4} className="cardcol">
              <ClothesSec
                onAddToCart={handleAddToCart}
                info={women}
                name={women.name}
                price={women.price}
                description={women.description}
                img={women.img}
                key={key}
              />
            </Col>
          ))}
        </Row>
        <div className="h2 mt-5 text-white">Cake Daddies</div>
        <hr></hr>
        <Row className="mensRow">
          {mens.map((men, key) => (
            <Col md={4} className="cardcol">
              <ClothesSec
                onAddToCart={handleAddToCart}
                info={men}
                name={men.name}
                price={men.price}
                description={men.description}
                img={men.img}
                key={key}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <Statements />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
