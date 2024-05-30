import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider} from "./context/authContext.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClass={3000}
        closeOnClick
        pauseOnHover={false}
      />
      <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
