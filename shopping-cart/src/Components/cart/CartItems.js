import React from "react";

const CartItem = ({ id, name, description, price, units, img }) => (
  <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
    <img className="w2 h2 w3-ns h3-ns br-100" src={img} />{" "}
    <div className="pl3 flex-auto">
      <span className="f6 db black-70"> {name} </span>{" "}
      <span className="f6 db black-70"> {description} </span>{" "}
    </div>
    <div>
      <span> Units: {units} </span> <button> + </button> <button> - </button>{" "}
    </div>
  </li>
);

export default class CartList extends React.PureComponent {
  render() {
    const { cart } = this.props;

    return (
      <ul className="list pl0 mt0 measure center">
        {cart.map((item) => (
          <CartItem {...item} key={item.id} />
        ))}
      </ul>
    );
  }
}
