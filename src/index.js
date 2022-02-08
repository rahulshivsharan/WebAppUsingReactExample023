'use strict';

import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {
    Router,
    Route,
    browserHistory, 
    IndexRoute    
} from "react-router";
import App from "./App";
import Home from "./home";
import Movies from './movies';
import Cryptos from './cryptos';

ReactDom.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/movies(/)" component={Movies} />
            <Route path="/cryptos(/)" component={Cryptos} />
        </Route>        
    </Router>   
),document.querySelector("#app"));

