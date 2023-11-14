import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (onConfirm && typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

export default function App() {
  const deleteWorld = () => console.log("Deleting the word...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}
