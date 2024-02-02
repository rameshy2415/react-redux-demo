import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
//import store from "./store/indexStore.jsx";
import formStore from "./store/formStore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={formStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
