import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  // dummy value for testing the login and register redirect
   const user= false;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="login" element={user ? <Home/> : <Login />} />
        <Route path="products/" element={<ProductList />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Register" element={user ? <Home/> : <Register />} />
      </Routes>
    </Router>
  )
};

export default App;
