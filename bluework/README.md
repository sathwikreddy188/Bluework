# BlueWork

A platform connecting blue-collar workers directly with customers.

## Project Structure

```
bluework/
├── backend/     # Node.js + Express API server
└── frontend/    # React + Vite web app
```

## Current Stage

This is Step 1: the project foundation only.
- No database yet
- No authentication yet
- No payments, chat, or maps yet

The frontend and backend are wired together so they can talk to each other,
but there is no real feature logic yet — just a "hello" message passed from
backend to frontend to prove the connection works.

## Running Locally

**Backend** (runs on http://localhost:5000):
```
cd backend
npm install
npm start
```

**Frontend** (runs on http://localhost:3000):
```
cd frontend
npm install
npm run dev
```

Open http://localhost:3000 in your browser. The page will show a message
fetched live from the backend, confirming the two are connected.
