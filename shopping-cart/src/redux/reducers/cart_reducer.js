/*
acttion = {
    type: "STRING",
    payload:"DATA"
}
*/
import { ADD_TO_CART } from "../actions/cart_action";

const INITIAL_STATE = [
  {
    id: 1,
    name: "Cookies",
    description: "Milk based home baked cookies",
    img: "https://i.imgur.com/0YUrm5c.jpeg",
    price: 120,
    units: 1,
  },
];

export default function cartReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const cart = state;
      // to get the existing product in the cart, and increase its qualtity
      const existingProductIndex = findProductIndex(cart, product.id);
      const updatedCart =
        existingProductIndex >= 0
          ? updateProductUnit(cart, product)
          : [...cart, product];

      return updatedCart;
    }
  }
  return state;
}

const findProductIndex = (cart, productID) => {
  return cart.findIndex((p) => p.id === productID);
};

const updateProductUnit = (cart, product) => {
  // to get the existing product in the cart, and increase its qualtity
  const productIndex = findProductIndex(cart, product.id);

  // filter out new items
  const updatedCart = [...cart];
  const existingProduct = updatedCart[productIndex];

  // add the count of units
  const updatedUnitsProducts = {
    ...existingProduct,
    units: existingProduct.units + product.units,
  };

  updatedCart[productIndex] = updatedUnitsProducts;
  // udpate the state of the cart
  return updatedCart;
};
