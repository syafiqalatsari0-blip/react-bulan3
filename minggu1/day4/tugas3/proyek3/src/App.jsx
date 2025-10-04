import React from "react";
import Button from "./components/Buttton"; 

function App() {
  return (
    <div style={{ display: "flex", gap: "12px", padding: "40px" }}>
      <Button>Default Button</Button>
      <Button variant="primary">Primary Button</Button>
    </div>
  );
}

export default App;
