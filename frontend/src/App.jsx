import { useEffect, useState } from "react";

function App() {
  const [backendMessage, setBackendMessage] = useState("Connecting to backend...");

  // When the page loads, ask the backend for a test message.
  // This proves the frontend and backend can communicate.
  useEffect(() => {
    fetch("/api/message")
      .then((res) => res.json())
      .then((data) => setBackendMessage(data.message))
      .catch(() => setBackendMessage("Could not reach backend. Is the server running?"));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "80px" }}>
      <h1>Welcome to BlueWork</h1>
      <p>Connecting blue-collar workers directly with customers.</p>
      <p><strong>Backend says:</strong> {backendMessage}</p>
    </div>
  );
}

export default App;
