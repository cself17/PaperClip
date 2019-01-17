import React from "react";
import Jar from "./pages/Jar/index";
/*import Jars from "./pages/Jars";*/
import Login from "./pages/Login";
import Survey from "./pages/Survey";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Switch>
				<Route exact path="/jar" component={Jar} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/survey" component={Survey} />
      </Switch>
    </div>
  </Router>
);

export default App;
