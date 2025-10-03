import React from "react";
import "./index.css";
import ProductCard from "./components/ProductCard.jsx";

function App() {
  return (
    <div className="app-container">
      <ProductCard productName="Laptop Gaming" price={15000000} stock={5} isAvailable={true} />
      <ProductCard productName="Mouse Wireless" price={250000} stock={12} isAvailable={true} />
      <ProductCard productName="Keyboard Mechanical" />
    </div>
  );
}

export default App;
