import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { JWTAuthProvider } from "./context/JWTAuth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JWTAuthProvider>
      <App />
    </JWTAuthProvider>
  </React.StrictMode>
);
