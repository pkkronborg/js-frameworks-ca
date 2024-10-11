import { Link } from "react-router-dom";
import { useCart } from "../../state/cart";


function CartIcon() {
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="position-relative">
      <Link to="/checkOut">
        <i className="bi bi-cart-fill fs-3"></i>

        {totalItems > 0 && (
          <span className="position-absolute top-50 start-100 translate-middle badge rounded-circle bg-warning">
            {totalItems}
          </span>
        )}
      </Link>
    </div>
  )

}

export default CartIcon;