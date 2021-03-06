import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";
import "./styles/tailwind.generated.css";

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
