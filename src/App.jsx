import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from "./components/Categories/Categories";
import ProductList from "./components/Products/ProductList";
import CategoriesProductList from "./components/Categories/CategoriesProductList";
import Navbar from "./components/Navbar/Navbar";
import CartProvider from './components/Context/CartContext'
import Cart from './Cart/Cart'
import UserRegistrationForm from './Cart/UserRegistrationForm'

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Categories />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/category/:categoryId" element={<CategoriesProductList />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="/detalle-compra" element={<UserRegistrationForm />} />
        </Routes>
      </Router>
    </CartProvider>
    
  );
}

export default App;