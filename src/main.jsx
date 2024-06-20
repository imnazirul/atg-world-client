import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home/Home.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Home />
    </AuthProvider>
  </React.StrictMode>
);
