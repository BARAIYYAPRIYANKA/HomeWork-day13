import React from 'react';

const Cart = ({ cart }) => {
  const cartItems = Object.values(cart);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No Product added to the cart</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <span>
              {item.name} - ${item.price} x {item.quantity}
            </span>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <div className="total">
          <strong>Total Price: ${totalPrice}</strong>
        </div>
      )}
    </div>
  );
};

export default Cart;
