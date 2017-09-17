import './scss/style.scss';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./components/Home";
import Custom from "./components/Custom";
import Layout from "./components/Layout";

const app = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <div className="full-height">
      <Route path="/home" component={Home}/>
      <Route path="/custom" component={Custom}/>
    </div>
  </BrowserRouter>
  , app
);
