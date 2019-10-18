import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";

import Router from "./router";

// TODO: Add Unit Testing.
// TODO: Add Application Global State.
// TODO: If Project will scale, add some CSS methodology like BEM for better style handling.
// TODO: export to gzip file to reduce loadTimes.
// TODO: separate chunks for lazy loading.

ReactDOM.render(<Router />, document.getElementById("app"));
