/*
acttion = {
    type: "STRING",
    payload:"DATA"
}
*/

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
  return state;
}
