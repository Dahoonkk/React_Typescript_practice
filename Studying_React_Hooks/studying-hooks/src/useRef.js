import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const potato = useRef();
  setTimeout(() => potato.current.focus(), 2000);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input ref={potato} placeholder="la" />
    </div>
  );
}
