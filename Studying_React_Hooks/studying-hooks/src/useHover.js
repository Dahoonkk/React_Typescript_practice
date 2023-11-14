import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const useHover = (onHover) => {
  if (typeof onHove !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  return element;
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

// useClick과 비슷함