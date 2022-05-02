import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { useState } from "react";

import List from "./components/List"

const App = () => {
  return (
    <div id="App">
      <h1>Too Due</h1>
      <List />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App/>);
