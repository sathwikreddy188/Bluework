// server.js
// This is the main file that starts our backend server.

import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Allow the frontend (running on a different port) to talk to this backend.
app.use(cors());

// Allow the server to understand JSON data sent in requests.
app.use(express.json());

// A simple "health check" route.
// If you visit http://localhost:5000/ you should see this message.
app.get("/", (req, res) => {
  res.send("BlueWork backend is running!");
});

// A test API route the frontend will call to prove the two are connected.
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the BlueWork backend!" });
});

app.listen(PORT, () => {
  console.log(`BlueWork backend server is running on http://localhost:${PORT}`);
});
