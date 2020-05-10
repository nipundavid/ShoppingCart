import Product from "../Product";
import React, { Component } from "react";

export default class Products extends React.PureComponent {
  state = {
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

  findProductIndex = (cart, productID) => {
    return cart.findIndex((p) => p.id === productID);
  };

  updateProductUnit = (cart, product) => {
    // to get the existing product in the cart, and increase its qualtity
    const productIndex = this.findProductIndex(cart, product.id);

    // filter out new items
    const updatedProducts = [...cart];
    const existingProduct = updatedProducts[productIndex];

    // add the count of units
    const updatedUnitsProducts = {
      ...existingProduct,
      units: existingProduct.units + product.units,
    };

    updatedProducts[productIndex] = updatedUnitsProducts;
    // udpate the state of the cart
    return updatedProducts;
  };

  addToCart(product) {
    const { cart } = this.state;
    // to get the existing product in the cart, and increase its qualtity
    const existingProductIndex = this.findProductIndex(cart, product.id);
    this.setState({
      cart:
        existingProductIndex >= 0
          ? this.updateProductUnit(cart, product)
          : [...cart, product],
    });
  }

  render() {
    const { products } = this.props;
    return (
      <div className="flex flex-wrap justify-between">
        {products.map((p) => (
          <Product key={p.id} {...p} addFunc={this.addToCart} />
        ))}
      </div>
    );
  }
}
