import React from 'react';

const ProductList = ({ products, dispatch }) => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product">
          <span>{product.name} - ${product.price}</span>
          <button onClick={() => dispatch({ type: 'ADD', product })}>+</button>
          <button onClick={() => dispatch({ type: 'REMOVE', product })}>-</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
