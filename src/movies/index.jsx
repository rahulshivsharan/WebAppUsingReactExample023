'use strict';

import React, {Component} from 'react';
import Header from '../header';
import {
    BrowserRouter,
    Route,    
    Link    
} from "react-router-dom";
import TopTvShowList from './TopTvShowList';
import MovieSearch from "./MovieSearch";
import MovieSearchTwo from "./MovieSearchTwo";

class Movies extends Component{
    render(){
        return(
            <BrowserRouter>                
                <div className="row">
                    <div className="col-md-2">                        
                        
                        <div className="row">
                            <div className="col-md-12">
                                <div className="list-group">
                                    <Link className="list-group-item" to="/movies/toptvshows">Top Rated TV Shows</Link>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="list-group">
                                    <Link className="list-group-item" to="/movies/search">Search Movies</Link>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="list-group">
                                    <Link className="list-group-item" to="/movies/search/hooks">Search Movies Using Reducer</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-10">                                                
                        <Route exact path="/movies/toptvshows" component={TopTvShowList} />
                        <Route exact path="/movies/search" component={MovieSearch} />
                        <Route exact path="/movies/search/hooks" component={MovieSearchTwo} />
                    </div>
                </div>                
            </BrowserRouter>   
        )
    }
}

export default Movies;