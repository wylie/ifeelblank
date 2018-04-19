import React from "react";
import { render } from "react-dom";
import Wrap from "./components/wrap";

import "./styles/_reset.css";
import "./_index.css";

const App = () => (
  <div className="App">
    <Wrap />
  </div>
);

render(<App />, document.getElementById("root"));
