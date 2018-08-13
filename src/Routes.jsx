import React, { Component } from "react";
import { Hashrouter, Link, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Abeliophyllum from "./pages/Abeliophyllum";
import Agerantum from "./pages/Agerantum";
import HomePage from "./components/HomePage";

class Routes extends Component {
  render() {
    return (
      <Hashrouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Abeliophyllum" component={Abeliophyllum} />
          <Route exact path="/Agerantum" component={Agerantum} />
          <Route exact path="/Guestbook" component={GuestBook} />
        </Switch>
      </Hashrouter>
    );
  }
}

export default Routes;
