import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import { createBrowserHistory, History } from "history";

var history: History = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <App history={history} />
  </React.StrictMode>,
  document.getElementById("root")
);