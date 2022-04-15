'use strict';
import {FETCH_FAILURE, FETCH_INIT, FETCH_SUCCESS, RESET } from './action';

const initialState = {
    "isLoading" : false,
    "isError" : false,
    "tableStyle" : {"visibility" : "hidden"},
    "movielist" : []
}

const movieSearchReducer = (state = initialState, action) => {    
    switch(action.type){
        case FETCH_INIT:
            return {
                ...state,                    
                "isLoading" : true,
                "isError" : false,
                "tableStyle" : {"visibility" : "hidden"},
                "movielist" : []
            }
        case FETCH_SUCCESS:                    
            return {
                ...state,
                "isLoading" : false,
                "isError" : false,                    
                "tableStyle" : {"visibility" : "visible"},
                "movielist" : action.payload.movielist
            }
        case FETCH_FAILURE:
            return {
                ...state,
                "isLoading" : false,
                "isError" : true,
                "tableStyle" : {"visibility" : "hidden"},
                "movielist" : []
            }
        case RESET:
            return {
                ...state,
                "isLoading" : false,
                "isError" : false,
                "tableStyle" : {"visibility" : "hidden"},
                "movielist" : []
            }    
        default:
            return state;            
    }
}

export default movieSearchReducer;