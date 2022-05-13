import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FileBrowser from "./Components/FileBrowser";
import Login from "./Components/Login";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configStore from "./Components/Redux/configstore";
import { BrowserRouter } from "react-router-dom";

let { store, persistedStore } = configStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={() => <h1>loading...</h1>} persistor={persistedStore}>
      <App />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
