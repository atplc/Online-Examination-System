import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./app.css";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={MainPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
