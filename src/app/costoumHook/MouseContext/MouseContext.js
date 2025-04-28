"use client"
import { createContext, useContext, useState } from "react";

const MouseContext = createContext();

export const MouseProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  return (
    <MouseContext.Provider
      value={{ mousePosition, setMousePosition, isHovering, setIsHovering }}
    >
      {children}
    </MouseContext.Provider>
  );
};

export const useMouse = () => useContext(MouseContext);
