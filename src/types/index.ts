export interface Rectangle {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
}

export interface SocketEvents {
  "rectangle:add": (rect: Rectangle) => void;
  "rectangle:move": (rect: Rectangle) => void;
  "init": (rects: Rectangle[]) => void;
}
