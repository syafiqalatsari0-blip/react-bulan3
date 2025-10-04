import React from "react";
import AlertBox from "./components/AlertBox";

function App() {
  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <AlertBox type="success" message="Berhasil disimpan!" />
      <AlertBox type="warning" message="Periksa kembali data yang Anda masukkan." />
      <AlertBox type="error" message="Terjadi kesalahan, coba lagi nanti." />
    </div>
  );
}

export default App;
