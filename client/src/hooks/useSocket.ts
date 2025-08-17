import { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { useCanvasStore } from "../store/canvasStore";


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL as string;


const socket: Socket = io(BACKEND_URL);

export const useSocket = () => {
  const { addRectangle, updateRectangle, setRectangles } = useCanvasStore();

  useEffect(() => {
    socket.on("init", setRectangles);
    socket.on("rectangle:add", addRectangle);
    socket.on("rectangle:move", updateRectangle);
    socket.on("error", (err) => alert(err.message));

    return () => {
      socket.off("init");
      socket.off("rectangle:add");
      socket.off("rectangle:move");
      socket.off("error");
    };
  }, [addRectangle, updateRectangle, setRectangles]);

  return socket;
};
