import React, { Component } from "react";
import Product from "./Components/Product";
import "./style.css";

const products = [
  {
    id: 1,
    name: "Cookies",
    description: "Milk based home baked cookies",
    img: "https://i.imgur.com/0YUrm5c.jpeg",
    price: 120,
  },
  {
    id: 2,
    name: "Chocolate",
    description: "Special Swiss chocolate",
    img: "https://i.imgur.com/0yaJNiY.jpg",
    price: 200,
  },
  {
    id: 3,
    name: "Chips",
    description: "Crispy potato chips",
    img: "https://i.imgur.com/jwllWIo.jpg",
    price: 120,
  },
  {
    id: 4,
    name: "Cereals",
    description: "Tasty and Healty",
    img: "https://i.imgur.com/QWpu2Rm.jpg",
    price: 120,
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    return (
      <main className="pa3 pa5-ns flex flex-wrap">
        {products.map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </main>
    );
  }
}

export default App;
