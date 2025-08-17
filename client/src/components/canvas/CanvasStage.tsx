import React from "react";
import { Stage, Layer, Rect } from "react-konva";
import { useCanvasStore } from "../../store/canvasStore";

interface CanvasStageProps {
  onDragMove: (e: any, rect: any) => void;
}

export function CanvasStage({ onDragMove }: CanvasStageProps) {
  const { rectangles } = useCanvasStore();

  return (
    <div className="w-full border rounded-md overflow-hidden">
      <Stage width={window.innerWidth * 0.9} height={window.innerHeight * 0.7}>
        <Layer>
          {rectangles.map((rect) => (
            <Rect
              key={rect.id}
              {...rect}
              cornerRadius={8}
              draggable
              shadowColor="black"
              shadowBlur={6}
              shadowOpacity={0.2}
              onDragMove={(e) => onDragMove(e, rect)}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};
