'use strict';

import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default navbar-static-top">
					<div className="container-fluid">
						<div className="navbar-header">
						    <a className="navbar-brand" href="javaScript:void(0)">React Page</a>
						</div>
						<p className="navbar-text">
						    <Link className="navbar-link" to="/movies">Movies</Link>
						</p>
						<p className="navbar-text">
						    <Link className="navbar-link" to="/cryptos">Crypto-Currencies</Link>
						</p>
					</div>
				</nav>
            </div>
        );
    }    
}

export default Header;