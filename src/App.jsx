import React, { useReducer } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';

const Products = [
  { id: 1, name: 'Product-1', price: 100 },
  { id: 2, name: 'Product-2', price: 200 },
  { id: 3, name: 'Product-3', price: 300 },
];

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        [action.product.id]: {
          ...action.product,
          quantity: (state[action.product.id]?.quantity || 0) + 1,
        },
      };
    case 'REMOVE':
      if (!state[action.product.id]) return state;
      const updatedQuantity = state[action.product.id].quantity - 1;
      if (updatedQuantity <= 0) {
        const { [action.product.id]: removed, ...rest } = state;
        return rest;
      }
      return {
        ...state,
        [action.product.id]: {
          ...state[action.product.id],
          quantity: updatedQuantity,
        },
      };
    default:
      return state;
  }
};

const App = () => {
  const [cart, dispatch] = useReducer(cartReducer, {});

  return (
    <div className="App">
      <ProductList products={Products} dispatch={dispatch} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;
