import React from "react";
import "./index.css";
import Card from "./components/Card.jsx";

function App() {
  return (
    <div className="app-container">
      {/* Card berisi teks */}
      <Card>
        <h2>Halo, ini Card dengan teks!</h2>
        <p>Komponen Card bisa dipakai untuk membungkus konten apapun.</p>
      </Card>

      {/* Card berisi gambar */}
      <Card>
        <img
          src="https://picsum.photos/300/200"
          alt="Random"
          className="card-image"
        />
        <p>Ini contoh Card dengan gambar.</p>
      </Card>

      {/* Card berisi tombol */}
      <Card>
        <h3>Ayo Klik!</h3>
        <button className="btn">Klik Saya</button>
      </Card>
    </div>
  );
}

export default App;
