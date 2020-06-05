import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import "./index.css";
// import .ttf
import './Fonts/mago.ttf';
import App from "./App";
import RootStore from "./stores";
import * as serviceWorker from "./serviceWorker";

const root = new RootStore();

ReactDOM.render(
  <Provider {...root}>
    {}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
