import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const apiUrl = window.REACT_APP_API_URL;
    fetch(`${apiUrl}/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("❌ Failed to connect to backend API"));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend ↔ Backend Connectivity Test</h1>
      <p><strong>API Response:</strong> {message}</p>
    </div>
  );
}

export default App;
