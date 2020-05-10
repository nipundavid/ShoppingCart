import React, { Component } from "react";
import Products from "../Components/Products/Products";
import "../style.css";
import PRODUCTS from "../Data";
import { connect } from "react-redux";
import CartList from "../Components/cart/CartList";

class App extends Component {
  render() {
    console.log(this.props.cart);
    return (
      <main className="pa3 pa5-ns w-100">
        <CartList cart={this.props.cart} />
        <Products products={PRODUCTS} />
      </main>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

// export default App;
export default connect(mapStateToProps)(App);
