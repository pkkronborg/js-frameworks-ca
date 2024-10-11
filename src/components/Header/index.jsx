import { Link, NavLink } from "react-router-dom";
import CartIcon  from "../CartIcon"

function Nav() {
    return (
      <nav>
        <ul className="nav nav-underline" >
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/" exact>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    )
  }

function Header() {
    return (
        <header className="p-3 bg-light">
          <div className="d-flex justify-content-between align-items-center container">
            <Link className="text-decoration-none text-reset" to="/">
              <div className="fw-bold fs-4" >Online Shop</div>
            </Link>
            <Nav />
            <CartIcon />
            </div>
        </header>
    )
}

export default Header;