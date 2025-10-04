import React from "react";

function ProfileBox() {
  const containerStyle = {
    backgroundColor: "#1e1e2f",
    color: "#fff",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
    maxWidth: "300px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif"
  };

  const nameStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#4fd1c5" // warna cyan keren
  };

  const descStyle = {
    fontSize: "1rem",
    lineHeight: "1.5",
    color: "#cbd5e0"
  };

  return (
    <div style={containerStyle}>
      <h2 style={nameStyle}>Dien Syafiq</h2>
      <p style={descStyle}>
        Frontend Developer enthusiast 🚀 <br />
        Belajar React + Tailwind di Pondok IT Yogyakarta.
      </p>
    </div>
  );
}

export default ProfileBox;
