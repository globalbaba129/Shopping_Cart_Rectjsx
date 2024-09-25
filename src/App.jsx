import Cart from "./components/Cart/Cart";
import Checkout from "./components/checkout/Checkout";
import Footer from "./components/fotter/footer";
import HomeIndex from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import ProductDetail from "./components/Home/ProductDetail";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Error loading cart from localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      if (cart && cart.length > 0) {
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    } catch (error) {
      console.error("Error saving cart to localStorage", error);
    }
  }, [cart]);

  const addToCart = (product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  const removeCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<HomeIndex addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cart} updateCart={updateCart} removeCart={removeCart} />} />
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path='/checkout' element={<Checkout cartItems={cart} />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>

  );
}

export default App;