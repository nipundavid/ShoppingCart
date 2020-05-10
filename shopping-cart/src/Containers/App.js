import React, { Component } from "react";
import Products from "../Components/Products/Products";
import "../style.css";
import { bindActionCreators } from "redux";
import PRODUCTS from "../Data";
import { connect } from "react-redux";
import CartList from "../Components/cart/CartList";
import { addToCartAction } from "../redux/actions/cart_action";

class App extends Component {
  render() {
    const { cart, addToCartAction } = this.props;

    return (
      <main className="pa3 pa5-ns w-100">
        <CartList cart={cart} />
        <Products products={PRODUCTS} addToCartAction={addToCartAction} />
      </main>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

const mapActionsToProps = (dispatch) => {
  return bindActionCreators(
    {
      addToCartAction,
    },
    dispatch
  );
};

// export default App;
export default connect(mapStateToProps, mapActionsToProps)(App);
