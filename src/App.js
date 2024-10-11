import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import ProductDetails from "./components/ProductDetails";
import CheckOut from "./pages/cart/checkOut";
import CheckOutSuccess from "./pages/cart/checkOutSuccess";
import Contact from "./pages/contact/contact";
import Home from "./pages/shop/home";
import { CartProvider } from "./state/cart";

function App() {
  return (
    <div>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="checkOut" element={<CheckOut />} />
            <Route path="checkOutSuccess" element={<CheckOutSuccess />} />
          </Route>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
