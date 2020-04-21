import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Activate from "./pages/Activate";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Signin" component={Signin} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/auth/activate/:token" component={Activate} />
        {/*  <Route exact path="/Admin" component={Admin} />
        <Route exact path="/Error" component={Error} /> */}
      </Switch>
    </Router>
  );
};
export default App;
