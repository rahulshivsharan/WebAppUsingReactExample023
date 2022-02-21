'use strict';

import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import Header from "./header";
import Home from "./home";
import Movies from './movies';
import Cryptos from './cryptos';
import ReactHookTry from "./hookExample";

class App extends Component {
    render(){
        return (
            <BrowserRouter>                
                <div className="container">                    
                    <Header />
                    <div className="row">                        
                        <div className="col-md-12">                        
                            <Route exact path="/" component={Home} />
                            <Route exact path="/movies" component={Movies} />
                            <Route exact path="/cryptos" component={Cryptos} />
                            <Route exact path="/hooktry" component={ReactHookTry} />                        
                        </div>
                    </div>
                </div>
            </BrowserRouter>            
        );
    }
}

export default App;