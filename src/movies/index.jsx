'use strict';

import React, {Component} from 'react';
import Header from '../header';
import {
    BrowserRouter,
    Route,    
    Link    
} from "react-router-dom";
import TopTvShowList from './TopTvShowList';

class Movies extends Component{
    render(){
        return(
            <BrowserRouter>                
                <div className="row">
                    <div className="col-md-2">
                        <div className="list-group">
                            <Link className="list-group-item" to="/movies/toptvshows">Top Rated TV Shows</Link>
                        </div>
                    </div>
                    <div className="col-md-10">                                                
                        <Route exact path="/movies/toptvshows" component={TopTvShowList} />                        
                    </div>
                </div>                
            </BrowserRouter>   
        )
    }
}

export default Movies;