import React, { useEffect } from 'react';
import { useCart } from '../../state/cart'; 
import { Link } from 'react-router-dom';

function CheckoutSuccess() {
  const { setCartItems } = useCart();

  useEffect(() => {
    setCartItems([]);
  }, [setCartItems]);
  
  return (
    <div className="checkout-success container">
      <h1>Checkout Success</h1>
      <p>Thank you for your purchase!</p>
      <Link to="/" className="btn btn-primary">
        Go back to Store
      </Link>
    </div>
  );
}

export default CheckoutSuccess;