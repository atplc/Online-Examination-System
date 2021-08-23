import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./app.css";
import MainPage from "./Pages/MainPage";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={MainPage} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
