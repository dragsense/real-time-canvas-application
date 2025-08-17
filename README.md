# Real-Time Collaborative Canvas Application

A modern **real-time collaborative canvas application** built with **React, TypeScript, Tailwind CSS, Konva, Zustand, and Socket.IO**.
Multiple users can **add and drag rectangles**, with live updates across all connected clients.

---

## Features

* **Collaborative Canvas:** Multiple clients see changes in real-time.
* **Add Rectangles:** Dynamically create new rectangles on the canvas.
* **Drag & Drop:** Move rectangles with live position updates.
* **State Management:** Uses Zustand for client-side state.
* **Error Handling:** Custom `AppError` class for backend error management.
* **Responsive UI:** Styled with Tailwind CSS and ShadCN components (Card, Button).

---

## Tech Stack

**Frontend:**

* React.js with TypeScript
* Tailwind CSS
* React Konva
* Zustand
* Socket.io-client
* ShadCN UI components

**Backend:**

* Node.js with TypeScript
* Socket.io for WebSocket communication
* Custom controllers and error handling
---

## Setup Instructions

### **Frontend**

```bash
cd client
npm install
npm run dev
```

* Runs a Vite development server at `http://localhost:5173` (default).

### **Backend**

```bash
npm install
npm run dev
```

* Runs a Node.js server with Socket.IO at `http://localhost:4000` (default).

### **Full Project Run**

1. Start backend: `npm run start`
2. Start frontend: `cd client && npm run dev`
3. Open multiple browser tabs to test **real-time rectangle updates**.

---

## Usage

1. Click **"Add Rectangle"** to create a rectangle on the canvas.
2. Drag rectangles to move them around.
3. All connected clients will see updates in real-time.

---

## License

MIT © 2025
