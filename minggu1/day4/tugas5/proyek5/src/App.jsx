import React from "react";
import ResponsiveCard from "./components/ResponsiveCard.module.css";

function App() {
  return (
    <div>
      <ResponsiveCard
        title="Halo Dunia"
        content="Ini adalah contoh komponen responsif. Coba ubah ukuran layar kamu untuk melihat perubahan warna, padding, dan ukuran font."
      />
    </div>
  );
}

export default App;
