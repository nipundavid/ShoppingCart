import React from "react";
import "../style.css";

const Product = ({ id, name, description, img, price }) => {
  return (
    <article
      className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10"
      id={id}
    >
      <div className="tc">
        <img
          src={img}
          className="br-100 h4 w4 dib ba b--black-05 pa2"
          title={name}
        />
        <h1 className="f3 mb2">{name}</h1>
        <h2 className="f5 fw4 gray mt0">{description}</h2>
        <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn">
          Add
        </button>
        <span>${price}</span>
      </div>
    </article>
  );
};

export default Product;