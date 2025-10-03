import React from "react";
import "./index.css";
import Comment from "./components/Comment.jsx";

function App() {
  const user = {
    name: "Muhammad Dien Syafiq",
    avatarUrl: "https://i.pravatar.cc/150?img=10" // bisa diganti foto lain
  };

  return (
    <div className="app-container">
      <Comment
        user={user}
        text="Halo, saya Dien. Sekarang lagi belajar di Rumah IT Indonesia untuk mendalami pemrograman dan teknologi."
        date="3 Oktober 2025"
      />

      <Comment
        user={{ name: "Siti Aisyah", avatarUrl: "https://i.pravatar.cc/150?img=5" }}
        text="Terima kasih infonya! Sangat membantu 😊"
        date="2 Oktober 2025"
      />
    </div>
  );
}

export default App;
