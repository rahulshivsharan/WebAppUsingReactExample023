import React, { useState, useEffect } from 'react'; 
import {    getTopTvShows, 
            getFetchedTvShows, 
            getBatchTvShowDetails
        } from './movieAPI';
import { Spinner } from '../Spinner';
import { ErrorPanel } from "../common/Error"; 

var fetchedTVShowList = [];

const TopTvShowList = () => {
    console.log("Top TV Shows");
    const [error, setError] = useState(false); 

    const [tvShows, setTvShows] = useState(null);
    useEffect(() => {
        getTopTvShows().then(promiseList => {
            Promise.all(promiseList).then((dataList) => {
                fetchedTVShowList = getFetchedTvShows();
                setTvShows(dataList);
            }).catch((err) => {
                setError(true);
            });            
        }).catch((err) => {
            setError(true);
        });
    },[]);


    const [count, setCount] = useState(0);
    useEffect(() => {
        var nextCount = count + 3;
        //console.log(`Current Count ${count}, next Count No. ${nextCount}`);        
        if(tvShows  === null){            
            var showList = fetchedTVShowList.slice(count,nextCount);        
            getBatchTvShowDetails(showList).then((dataList) => {            
                setTvShows(dataList);
            });
        }            
    });    


    const tvShowList = (tvShows !== null) ? tvShows.map(item => (
            <tr key={item.id}>
               <td>{item.title}</td>
               <td>{item.year}</td>
               <td>{item.numberOfEpisodes}</td> 
               <td>
                   <img src={item.image.url} height="125px" width="125px" />
                </td>
            </tr>
    )) : null;

    if(error === true){
        return <ErrorPanel />
    } else if (tvShows  === null || (Array.isArray(tvShows) && tvShows.length === 0)) {
        return <Spinner />
    }else {
        return (
            <table className="table table-striped table-bordered">
                <tfoot>
                    <tr>
                        <td colSpan="4" align="left">
                            <button className="btn btn-primary" onClick={() => {                                
                                setTvShows(null);
                                setCount(count+3);
                            }}>Next</button>
                        </td>
                    </tr>
                </tfoot>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>No of Episodes</th>
                        <th>Poster</th>
                    </tr>
                </thead>
                <tbody>
                    {tvShowList}
                </tbody>                        
            </table>
        );
    }
}

export default TopTvShowList;