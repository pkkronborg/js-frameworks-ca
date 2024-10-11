import { Link } from "react-router-dom";
import CartIcon  from "../CartIcon"

function Nav() {
    return (
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }

function Header() {
    return (
        <header className="p-3 bg-light">
          <div className="d-flex justify-content-between align-items-center container">
            <div className="fw-bold">Online Shop</div>
            <Nav />
            <CartIcon />
            </div>
        </header>
    )
}

export default Header;