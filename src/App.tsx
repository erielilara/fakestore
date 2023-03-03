import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/common/Header/Header";
import { useDispatch } from "react-redux";
import { getProducts } from "./redux/actions";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Category from "./components/Category/Category";

function App() {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/details/:id" element={<ProductDetails />} />
          <Route path="/:category" element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
