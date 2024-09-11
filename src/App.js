import "./App.css";
import React, { useState, useEffect } from "react";
import ProductListing from "./ProductListing";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Cart";

function App() {
  //Add To cart
  const [cart, setAddtocart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addTocart = (data) => {

    const isItemincart = cart.some((cartval) => data.name === cartval.name);
    !isItemincart ? setAddtocart([...cart, data]) : alert("Item Already added");
  };

  // Handle Remove Product

  const onHandleRemove = (val) => {
    setAddtocart(cart.filter((cartdata) => cartdata.name !== val.name));
  };

  const cartLength = cart.length;

  // totl price

  // Total Price
  const productTotal = cart.map((total) => total.price);

  const totalPrice = productTotal.reduce((currentamount, totalamount) => {
    return currentamount + Math.round(totalamount);
  }, 0);

  return (
    <div>
      <Router>
        <Header cartLength={cartLength} />
        <Routes>
          <Route
            path="/cart"
            element={
              <Cart
                onHandleRemove={onHandleRemove}
                cart={cart}
                cartLength={cartLength}
                totalPrice={totalPrice}
              />
            }
          />

          <Route
            path="/"
            element={<ProductListing cart={cart} addTocart={addTocart} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
