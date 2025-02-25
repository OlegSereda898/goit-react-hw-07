import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster position="top-right" />
    </Provider>
  </StrictMode>
);
