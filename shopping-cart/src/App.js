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
      cart: [
        {
          id: 1,
          name: "Cookies",
          description: "Milk based home baked cookies",
          img: "https://i.imgur.com/0YUrm5c.jpeg",
          price: 120,
          units: 1,
        },
      ],
    };
  }

  handleAddFunc(product) {
    // to get the existing product in the cart, and increase its qualtity
    const existingProduct = this.state.cart.filter((p) => p.id === product.id);
    // Item is already there
    if (existingProduct.length > 0) {
      // filter out new items
      const withoutExistingProduct = this.state.cart.filter(
        (p) => p.id !== product.id
      );
      // add the count of units
      const updatedUnitsProducts = {
        ...existingProduct[0],
        units: existingProduct[0].units + product.units,
      };
      // udpate the state of the cart
      this.setState({
        cart: [...withoutExistingProduct, updatedUnitsProducts],
      });
    }
    // new items is added in t cart
    else {
      this.setState({ cart: [...this.state.cart, product] });
    }
  }

  render() {
    return (
      <main className="pa3 pa5-ns flex flex-wrap">
        <ul>
          {this.state.cart.map((c) => (
            <li>
              {c.name} | units {c.units}
            </li>
          ))}
        </ul>

        {products.map((p) => (
          <Product key={p.id} {...p} addFunc={this.handleAddFunc.bind(this)} />
        ))}
      </main>
    );
  }
}

export default App;
