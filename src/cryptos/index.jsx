'use strict';

import React, {Component} from 'react';
import {
    Router,
    Route,    
    Link    
} from "react-router-dom";

class Cryptos extends Component{
    render(){
        return(
            <div>                
                <div className="row">
                    <div className="col-md-2">
                        <div className="list-group">
                            <a href="#" className="list-group-item">Get All Currencies</a>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <h1>Cryptos !!!</h1>
                    </div>
                </div>                
            </div>
        );
    }
}

export default Cryptos;