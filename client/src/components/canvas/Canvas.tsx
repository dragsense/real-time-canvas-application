import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useCanvasStore } from "../../store/canvasStore";
import { useSocket } from "../../hooks/useSocket";
import { v4 as uuidv4 } from "uuid";
import { randomColor } from "../../utils/helpers";
import { CanvasToolbar } from "./CanvasToolbar";
import { CanvasStage } from "./CanvasStage";

function Canvas(props: any) {
  const socket = useSocket();
  const { addRectangle, updateRectangle, rectangles } = useCanvasStore();

  const handleAddRectangle = () => {
    const newRect = {
      id: uuidv4(),
      x: 50,
      y: 50,
      width: 120,
      height: 120,
      fill: randomColor(),
    };
    addRectangle(newRect);
    socket.emit("rectangle:add", newRect);
  };

  const handleDragMove = (e: any, rect: any) => {
    const updatedRect = { ...rect, x: e.target.x(), y: e.target.y() };
    updateRectangle(updatedRect);
    socket.emit("rectangle:move", updatedRect);
  };

  return (
    <div className="w-full max-w-6xl">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Real-Time Collaborative Canvas</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <CanvasToolbar onAddRectangle={handleAddRectangle} total={rectangles.length} />
          <CanvasStage onDragMove={handleDragMove} />
        </CardContent>
      </Card>
    </div>
  );
};


export default Canvas;