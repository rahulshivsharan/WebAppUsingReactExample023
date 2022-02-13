import React, { Fragment, useState, useEffect } from 'react'; 
import { Spinner } from '../Spinner';
import { ErrorPanel } from "../common/Error"; 
import { getMovieList } from './movieAPI';

const MovieSearchList = () => {
    console.log("Movie Search....");
    
    const [error, setError] = useState(false);     
    const [loader, setLoader] = useState(false);     
    const[movielist, setMovielist] = useState(null);
    const[movieQuery, setMovieQuery] = useState('');
    const[search, setSearch] = useState('');
    const [tableStyle, setTableStyle] = useState({
        "visibility" : "hidden"
    });

    useEffect(() => {
        var successFn = successFn;
        var errorFn = errorFn;       
        
        setTableStyle({
            "visibility" : "hidden"
        });

        if(search !== undefined && search !== null && search !== ''){            
            getMovieList(search).then(successFn).catch(errorFn);
        }

        function successFn(res){
            setError(false);            
            setLoader(false);
            setMovielist(res.titles);
            setTableStyle({
                "visibility" : "visible"
            });
        }

        function errorFn(err){
            console.log(err);
            setError(true);
            setLoader(false);
        };
    },[search]);   
    

    const movieListComponent = (movielist !== null && movielist.length > 0) ? movielist.map(movieData => (
        <tr key={movieData.id}>
            <td>{movieData.title}</td>
            <td>
                <img src={movieData.image} height="290px" width="300px" />
            </td>
        </tr>
    )) : null;


    if(error === true){
        return <ErrorPanel />;
    }else if (loader === true){
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
                                setLoader(true);
                                setSearch(movieQuery)
                            }}>Enter</button>
                        </div>
                    </div>
                </form>
                <table  className="table table-striped table-bordered" 
                        style={tableStyle}>
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

export default MovieSearchList;