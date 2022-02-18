import React, { Fragment, useState, useEffect, useReducer } from 'react'; 
import { Spinner } from '../Spinner';
import { ErrorPanel } from "../common/Error"; 
import { getMovieList } from './movieAPI';

const MovieSearchListTwo = () => {
    console.log("Movie Search....");  
    
    const dataFetchReducer = (state, action) => {
        switch (action.type){
            case "FETCH_INIT": 
                return {
                    ...state,                    
                    "isLoading" : true,
                    "isError" : false,
                    "tableStyle" : {"visibility" : "hidden"},
                    "movielist" : []
                }
            case "FETCH_SUCCESS":
                return {
                    ...state,
                    "isLoading" : false,
                    "isError" : false,                    
                    "tableStyle" : {"visibility" : "visible"},
                    "movielist" : action.payload
                }
            case "FETCH_FAILURE":
                return {
                    ...state,
                    "isLoading" : false,
                    "isError" : true,
                    "tableStyle" : {"visibility" : "hidden"}
                }
            default:
                throw new Error();             
        }
    };

    const [state, dispatch] = useReducer(dataFetchReducer, {
        "isLoading" : false,
        "isError" : false,
        "tableStyle" : {"visibility" : "hidden"},
        "movielist" : []
    });

    const [movieQuery, setMovieQuery] = useState("");
    const [search, setSearch] = useState(null);


    useEffect(() => {
        var successFn = successFn;
        var errorFn = errorFn;       
        
        if(search !== undefined && search !== null && search !== ''){            
            dispatch({ "type" : "FETCH_INIT" });
            getMovieList(search).then(successFn).catch(errorFn);
        }

        function successFn(res){
            dispatch({
                "type" : "FETCH_SUCCESS",                    
                "payload" : res.titles
            });
        }

        function errorFn(err){
            console.log(err);
            dispatch({ "type" : "FETCH_FAILURE" });                
        };
    },[search]);    
    

    const movieListComponent = (state.movielist !== null && state.movielist.length > 0) ? state.movielist.map(movieData => (
        <tr key={movieData.id}>
            <td>{movieData.title}</td>
            <td>
                <img src={movieData.image} height="290px" width="300px" />
            </td>
        </tr>
    )) : null;


    if(state.isError === true){
        return <ErrorPanel />;
    }else if (state.isLoading === true){
        return <Spinner />;
    }else{
        return (
            <Fragment>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label for="movieSearchId" className="col-md-2 control-label">Movie Name</label>
                        <div className="col-md-7">
                            <input  type="text" 
                                    className="form-control" 
                                    id="movieSearchId" 
                                    placeholder="Search Movie" 
                                    value={movieQuery}
                                    onChange={event => setMovieQuery(event.target.value)} />
                        </div>                
                    </div>
    
                    <div className="form-group">
                        <div className="col-md-offset-2 col-md-7">
                            <button type="button" className="btn btn-primary" onClick={() => {                                
                                setSearch(movieQuery);
                            }}>Enter</button>
                        </div>
                    </div>
                </form>
                <table  className="table table-striped table-bordered" 
                        style={state.tableStyle}>
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
    }        
}

export default MovieSearchListTwo;