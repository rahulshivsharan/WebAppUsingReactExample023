'use strict';

export const ADD_NUMBERS = 'ADD_NUMBERS';
export const RESET = 'RESET';

export const addNum = (val) => {
    return {
        "type" : ADD_NUMBERS,
        "payload" : val
    }
}

export const reset = () => {
    return {
        "type" : RESET
    }
}