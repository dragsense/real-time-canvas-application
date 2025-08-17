import { Server, Socket } from "socket.io";
import { rectangleController } from "../controllers/rectangleController";
import { SocketEvents } from "../types";

export const registerSocket = (io: Server) => {
  io.on("connection", (socket: Socket<SocketEvents>) => {
    console.log(`Client connected: ${socket.id}`);

    rectangleController.init(socket);

    socket.on("rectangle:add", (rect) => rectangleController.addRectangle(socket, rect));
    socket.on("rectangle:move", (rect) => rectangleController.moveRectangle(socket, rect));

    socket.on("disconnect", () => console.log(`Client disconnected: ${socket.id}`));
  });
};
