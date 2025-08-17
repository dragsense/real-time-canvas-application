import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import { registerSocket } from "./sockets";

const app = express();
app.use(cors());
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

registerSocket(io);

const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
