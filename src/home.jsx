'use strict';

import React, {Component} from 'react';
import Header from "./header";

class Home extends Component {
    render(){
        return(
            <div>
                <Header />
                <div className="page-header">
                    <h1>This is React WebApp</h1>
                </div>
            </div>
        );
    }
}

export default Home;