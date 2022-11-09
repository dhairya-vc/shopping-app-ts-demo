import "react-app-polyfill/ie9";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";

import App from "./App";
import store from "./redux/store";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
);
