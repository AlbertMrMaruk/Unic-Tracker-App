import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { getMessaging, onMessage } from "firebase/messaging";

const root = ReactDOM.createRoot(document.getElementById("root"));
const messaging = getMessaging(/* app */);
onMessage(messaging, (payload) => {});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
