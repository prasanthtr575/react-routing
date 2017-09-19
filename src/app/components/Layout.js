import React from "react";
import { Switch, Route } from 'react-router-dom';

import Header from "./Header";
import Home from "./Home";
import Custom from "./Custom";

export default class Layout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="full-height">
          <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/custom' component={Custom}/>
          </Switch>
        </div>
      );
  }
}
