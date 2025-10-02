import React from "react";
import "./App.css";

function App() {
  // Variabel contoh
  const nama = "Dien";
  const harga = 100000;
  const diskon = 0.2;

  // Fungsi untuk hitung harga diskon
  const hitungDiskon = (harga, diskon) => {
    return harga - harga * diskon;
  };

  // Manipulasi string
  const sapaan = (user) => `Halo, ${user}! Selamat datang di React`;

  return (
    <div className="container">
      <h1>{sapaan(nama)}</h1>
      <p>Harga Asli: Rp {harga.toLocaleString()}</p>
      <p>
        Harga Setelah Diskon {diskon * 100}%: Rp{" "}
        {hitungDiskon(harga, diskon).toLocaleString()}
      </p>
      <p>Operasi Matematika: 7 x 8 = {7 * 8}</p>
      <p>Huruf besar nama: {nama.toUpperCase()}</p>
    </div>
  );
}

export default App;
