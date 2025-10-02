import React from "react";
import "./App.css";

function App() {
  // Contoh array data
  const buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Semangka"];

  return (
    <div className="container">
      <h1>Daftar Buah</h1>
      <ul>
        {buah.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
