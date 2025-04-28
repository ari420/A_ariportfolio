"use client";
import { createContext, useContext, useState } from "react";

const CelectorContext = createContext();

export const CelectorProviver = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <CelectorContext.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </CelectorContext.Provider>
  );
};

export const usePage = () => useContext(CelectorContext);
