import React from "react";
import ReactDOM from "react-dom/client";
import { MemoTestApp } from "./Memotest.tsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <MemoTestApp />
  // {/* </React.StrictMode> */}
);
