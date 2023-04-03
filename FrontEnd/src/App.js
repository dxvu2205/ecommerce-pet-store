import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/home";
import Product from "./pages/Products/Product";
import Accessory from "./pages/Accessories/Accessory";
import Footer from "./pages/Footer/Footer";
import News from "./pages/News/News";
import Login from "./pages/login/login";
import Layout from "./pages/Layout";
import Cart from "./pages/Cart/Cart";
import Register from "./pages/Register/Register";
function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="thucung" element={<Product />} />
          <Route path="phukien" element={<Accessory />} />
          <Route path="tintuc" elemet={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
  );
}

export default App;
