import React, { useEffect } from "react";
import "./App.css";
import ListView from "./components/List";
import HeaderBlock from "./components/Header";

function App() {
  useEffect(() => {
    console.log("init");
    return () => {
      console.log("unmount");
    };
  });

  return (
    <div className="TodoApp_Body">
      <HeaderBlock />
      <ListView />
    </div>
  );
}

export default App;
