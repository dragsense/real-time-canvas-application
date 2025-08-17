import { Socket } from "socket.io";
import { Rectangle } from "../types";
import { AppError } from "../utils/errorHandler";

let rectangles: Rectangle[] = [];

export const rectangleController = {
  init: (socket: Socket) => {
    socket.emit("init", rectangles);
  },

  addRectangle: (socket: Socket, rect: Rectangle) => {
    try {
      rectangles.push(rect);
      socket.broadcast.emit("rectangle:add", rect);
    } catch (err) {
      console.error("Error adding rectangle", err);
      socket.emit("error", new AppError("Failed to add rectangle"));
    }
  },

  moveRectangle: (socket: Socket, updated: Rectangle) => {
    try {
      rectangles = rectangles.map((r) => (r.id === updated.id ? updated : r));
      socket.broadcast.emit("rectangle:move", updated);
    } catch (err) {
      console.error("Error moving rectangle", err);
      socket.emit("error", new AppError("Failed to move rectangle"));
    }
  },
};
