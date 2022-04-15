import axios from "axios";

const BASE_URL_IMDB_8 = "https://imdb8.p.rapidapi.com";
const BASE_URL_IMDB_1 = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com";
const X_RAPID_API_KEY = "cb9d056906msh202db15fb23cdf9p1e99c4jsn7dd51c460112";
const X_RAPID_API_HOST = "imdb8.p.rapidapi.com";

var sendRequest = sendRequest;
var tvShowList = [];


const setTvShowList = (tvList) =>{
    tvShowList = tvList;
};

export const getFetchedTvShows = () =>{
    return tvShowList;
};

export const getMovieList = (movieName) => {
    let url = BASE_URL_IMDB_1 + "/search/"+movieName;
    return sendRequest(url, "GET", { "api" : "imdb1" });
}

export const searchMovieByTitle = (movieName) => {
    let url = BASE_URL_IMDB_8 + "/title/find?q="+movieName;
    return sendRequest(url, "GET", { "api" : "imdb8" });
}

export const getTopTvShows = () => {
    return new Promise((resolve, reject) => {
        var promiseList = [];
        var url = BASE_URL_IMDB_8 + "/title/get-top-rated-tv-shows";    
        let promise = sendRequest(url, "GET", { "api" : "imdb8" });
        
        promise.then((data) => {
            setTvShowList(data);
            var tvShowList = data.slice(0,3);     

            tvShowList.forEach((tvShow) => {
                var id = tvShow.id.split("/");            
                var url = BASE_URL_IMDB_8 + "/title/get-details?tconst=" + id[2];    
                var pObject = sendRequest(url, "GET", { "api" : "imdb8" });
                promiseList.push(pObject);
            });

            resolve(promiseList);
        }, (err) => {            
            reject(err);
        });
    });
}

export const getBatchTvShowDetails  = (tvShowList) => {
    return new Promise((resolve, reject) => {
        var promiseList = [];
        tvShowList.forEach((tvShow) => {
                var id = tvShow.id.split("/");            
                var url = BASE_URL_IMDB_8 + "/title/get-details?tconst=" + id[2];    
                var pObject = sendRequest(url, "GET", { "api" : "imdb8" });
                promiseList.push(pObject);
        });

        Promise.all(promiseList).then((values)=>{
            resolve(values);
        }).catch(error => {
            reject(error);
        });
    });
}


function sendRequest(apiPath, httpMethod, opt){    
    return new Promise((resolve,reject) => {
        var successFn = successFn;
        var errorFn = errorFn;

        var option = {
            "method" : httpMethod,
            "headers" : {
                "x-rapidapi-key" : X_RAPID_API_KEY
            }
        }
    
        if(opt["api"] === "imdb8"){
            option.headers["x-rapidapi-host"] = X_RAPID_API_HOST;
        }
        
        axios(apiPath,option).then(successFn,errorFn);

        function successFn(response){
            resolve(response.data);
        }

        function errorFn(error){
            reject(error);
        }
    }); 
}