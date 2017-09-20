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
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/custom/:username' component={Custom}/>
          </Switch>
        </div>
      );
  }
}
