import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css"
// import Login from "./components/Login";
// import Register from "./components/Register";
import Home from "./pages/Home";
import { MobxStore } from "./store/MobxStore";

function App() {
  return (
    <>
      <Route exact path="/">
        <Home store={MobxStore} />
      </Route>
      {/* <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} /> */}
    </>
  );
}

export default App;
