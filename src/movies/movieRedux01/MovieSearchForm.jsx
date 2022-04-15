'use strict';
import React, {Component, Fragment, useState} from 'react';
import { searchMovieByTitle } from '../movieAPI';
import { Spinner } from '../../Spinner';
import { ErrorPanel } from "../../common/Error"; 

const MovieSearchForm = (props) => {
    
    const [state, setState] = useState({
        "movieQuery" : "",
        "isLoading" : false,
        "isError" : false,
        "tableStyle" : {"visibility" : "hidden"},
        "movielist" : []
    });

    const obj = {
        "movielist" :   props.movielist,
        "isLoading" :   props.isLoading,
        "isError" :     props.isError,
        "tableStyle" :  props.tableStyle,
        "actionOps" :   props.actionref
    }

    const submitForm = () => {
        //console.log("Movie entered is "+state.movieQuery);
        obj.actionOps.fetchInit();

        let movieName = state.movieQuery;
        var successFn = successFn;
        var errorFn = errorFn; 
        searchMovieByTitle(movieName).then(successFn).catch(errorFn);

        function successFn(res){
            //console.log(res.results);
            var movielist = res.results;  
            obj.actionOps.fetchSuccess({
                "movielist" : movielist // action.payload.movielist
            });          
        }

        function errorFn(err){
            obj.actionOps.fetchError();
        }
    }   
    
    const resetForm = () => {
        setState({
            "movieQuery" : ""
        });
        obj.actionOps.reset();
    }

    const movieListComponent = (obj.movielist !== null && obj.movielist.length > 0) ? obj.movielist.filter(movieData => {  
        return (movieData.titleType === "movie");
    }).map(movieData => (
        <tr key={movieData.id}>
            <td>{movieData.title}</td>
            <td>
                <img src={(movieData.image !== undefined) ? movieData.image.url : ""} height="290px" width="300px" />
            </td>
        </tr>
    )) : null;

    if(obj.isError === true){
        return <ErrorPanel />;
    }else if (obj.isLoading === true){
        return <Spinner />;
    }else{
        return (
            <Fragment>
                <form className="form-inline">
                    <div className="form-group">
                        <label for="movieSearchId" className="col-md-4 control-label">Movie Name</label>
                        <div className="col-md-8">
                            <input  type="text" 
                                    className="form-control" 
                                    id="movieSearchId" 
                                    placeholder="Search Movie" 
                                    value={state.movieQuery}
                                    onChange={event => setState({
                                        ...state,
                                        "movieQuery" : event.target.value
                                    })} />
                        </div>                
                    </div>
                    &nbsp;                
                    <button type="button" 
                            className="btn btn-primary" 
                            onClick={submitForm}>Enter</button>

                    &nbsp;
                    <button type="button" 
                        className="btn btn-default"
                        onClick={resetForm}>Reset</button>
                </form>
                <br />
                <table  className="table table-striped table-bordered" 
                        style={obj.tableStyle}>
                    <thead>
                        <tr>
                            <th>Title</th>                        
                            <th>Poster</th>
                        </tr>
                    </thead>  
                    <tbody>
                        {movieListComponent}
                    </tbody>                                      
                </table>            
            </Fragment>
        )
    } // else
}

export default MovieSearchForm;