import React, { Component } from "react";
import Products from "./Components/Products/Products";
import "./style.css";
import PRODUCTS from "./Data";

class App extends Component {
  render() {
    return (
      <main className="pa3 pa5-ns w-100">
        {/* <ul>
          {this.state.cart.map((c) => (
            <li>
              {c.name} | units {c.units}
            </li>
          ))}
        </ul> */}

        <Products products={PRODUCTS} />
      </main>
    );
  }
}

export default App;
