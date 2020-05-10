import Product from "../Product";
import React, { Component } from "react";

export default class Products extends React.PureComponent {
  //   state = {
  //     cart: [
  //       {
  //         id: 1,
  //         name: "Cookies",
  //         description: "Milk based home baked cookies",
  //         img: "https://i.imgur.com/0YUrm5c.jpeg",
  //         price: 120,
  //         units: 1,
  //       },
  //     ],
  //   };

  addToCart = (product) => {
    this.props.addToCartAction(product);
  };

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
