import React from "react";
import "./App.css";

function App() {
  // Contoh kondisi
  const isLogin = true;
  const unreadMessages = 3;

  return (
    <div className="container">
      <h1>Conditional Rendering</h1>

      {/* Menggunakan ternary operator */}
      <p>{isLogin ? "Selamat datang kembali, Dien!" : "Silakan login dulu."}</p>

      {/* Menggunakan logical AND */}
      {unreadMessages > 0 && (
        <p>Kamu punya {unreadMessages} pesan yang belum dibaca.</p>
      )}

      {unreadMessages === 0 && (
        <p>Tidak ada pesan baru untukmu hari ini 😊</p>
      )}
    </div>
  );
}

export default App;
