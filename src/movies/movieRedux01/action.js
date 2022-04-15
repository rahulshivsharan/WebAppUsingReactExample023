'use strict';

export const FETCH_INIT = "FETCH_INIT";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const RESET = "RESET";

export const fetchInit = () => {
    return {
        "type" : FETCH_INIT        
    }
}

export const fetchSuccess = (val) => {
    return {
        "type" : FETCH_SUCCESS,
        "payload" : val
    }
}

export const fetchError = () => {
    return {
        "type" : FETCH_FAILURE        
    }
}

export const reset = () => {
    return {
        "type" : RESET        
    }
}