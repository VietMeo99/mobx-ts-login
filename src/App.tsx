import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Provider } from "mobx-react";

import "./App.css";
import Home from "pages/Home";
import { observer } from "mobx-react";
import ForgetPassword from "pages/ForgetPassword";
// import { FormContext } from "context/formContext";
// import { MobxStore } from "stores/MobxStore";
// import Demo from "./components/Demo";


interface Props {
  history: {
    push(url: string): void;
  };
}

@observer
export default class App extends Component<Props, any> {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Demo}/> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/forget" component={ForgetPassword} />
        </Switch>
      </Router>
    );
  }
}
