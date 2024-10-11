import React from 'react';
import { useCart } from '../../state/cart'; 
import { Link } from 'react-router-dom'; 

function CheckoutPage() {
    const { cartItems } = useCart();  
  
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    return (
      <div className="checkout-page container">
        <h1>Checkout Page</h1>
        <div className="cart-items-list">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Quantity: {item.quantity}</p>
                    <p className="card-text">Price: ${item.price}</p>
                    <p className="card-text">Subtotal: ${item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
  
        <div className="cart-summary">
          <h3>Total: ${totalPrice.toFixed(2)}</h3> 
          <Link to="/checkOutSuccess">
            <button className="btn btn-primary">Checkout</button>
          </Link>
        </div>
      </div>
    );
  }
  
  export default CheckoutPage;