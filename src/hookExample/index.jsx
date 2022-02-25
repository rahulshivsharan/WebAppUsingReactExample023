import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,    
    Link    
} from "react-router-dom";
import CounterExampleOne from "./CounterExampleOne";
import AdderExampleOne from "./AdderExampleOne";
import CounterExampleTwo from './redux_usage_01/CounterExampleTwo';

class ReactHookTry extends Component{
    render(){
        return (
            <BrowserRouter>
                <div className="row">
                    <div className="col-md-2">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="list-group">
                                    <Link className="list-group-item" to="/hooktry/one">Counter Example One</Link>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="list-group">
                                    <Link className="list-group-item" to="/hooktry/two">Add Two Num</Link>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="list-group">
                                    <Link className="list-group-item" to="/hooktry/counterredux01">Counter Using Redux 01</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-10">                                                
                        <Route exact path="/hooktry/one" component={CounterExampleOne} />
                        <Route exact path="/hooktry/two" component={AdderExampleOne} />
                        <Route exact path="/hooktry/counterredux01" component={CounterExampleTwo} />
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default ReactHookTry;