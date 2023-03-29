import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/home";
import Product from "./components/Products/Product";
import Accessory from "./components/Accessories/Accessory";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Login from "./components/login/login";
import Layout from "./components/Layout";
import Cart from './components/Cart/Cart';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="thucung" element={<Product />} />
          <Route path="phukien" element={<Accessory />} />
          <Route path="tintuc" elemet={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
