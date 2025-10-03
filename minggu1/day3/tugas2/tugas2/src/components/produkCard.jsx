import React from "react";
import "../index.css";

function ProductCard({ productName, price, stock, isAvailable }) {
  return (
    <div className={`product-card ${isAvailable ? "" : "unavailable"}`}>
      <h2 className="product-name">{productName}</h2>
      <p className="product-price">Harga: Rp {price.toLocaleString()}</p>
      <p className="product-stock">Stok: {stock}</p>
      <p className="product-status">
        {isAvailable ? "Tersedia " : "Tidak Tersedia "}
      </p>
    </div>
  );
}

// Default props untuk nilai opsional
ProductCard.defaultProps = {
  price: 0,
  stock: 0,
  isAvailable: false,
};

export default ProductCard;
