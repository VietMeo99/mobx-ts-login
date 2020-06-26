import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { createBrowserHistory } from "history";
// import { Provider } from "mobx-react";

import "./App.css";
import Home from "pages/Home";
import { observer } from "mobx-react";
import { FormContext } from "context/formContext";
// import { MobxStore } from "stores/MobxStore";

const App = observer(() => {
  return (
    <FormContext>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </FormContext>
  );
});

export default App;
