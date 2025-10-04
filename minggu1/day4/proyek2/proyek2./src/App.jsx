import React from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
      <ProfileCard name="Muhammad Dien Syafiq" location="Yogyakarta" />
    </div>
  );
}

export default App;
