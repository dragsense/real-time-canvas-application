import { create } from "zustand";
import { type Rectangle } from "../types";

interface CanvasState {
  rectangles: Rectangle[];
  addRectangle: (rect: Rectangle) => void;
  updateRectangle: (rect: Rectangle) => void;
  setRectangles: (rects: Rectangle[]) => void;
}

export const useCanvasStore = create<CanvasState>((set) => ({
  rectangles: [],
  addRectangle: (rect) => set((state) => ({ rectangles: [...state.rectangles, rect] })),
  updateRectangle: (rect) =>
    set((state) => ({
      rectangles: state.rectangles.map((r) => (r.id === rect.id ? rect : r)),
    })),
  setRectangles: (rects) => set({ rectangles: rects }),
}));
