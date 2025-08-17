import React from "react";
import { Button } from "../ui/button";

interface CanvasToolbarProps {
    onAddRectangle: () => void;
    total: number;
}

export function CanvasToolbar({ onAddRectangle, total }: CanvasToolbarProps) {
    return (
        <div className="w-full flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Total Rectangles: {total}</h2>
            <Button variant="default" onClick={onAddRectangle}>
                Add Rectangle
            </Button>
        </div>
    );
};
