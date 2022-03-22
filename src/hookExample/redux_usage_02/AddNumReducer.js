'use strict';

import {ADD_NUMBERS, RESET} from './action';

const initialState = {
    "sum" : 0
};

const addNumReducer = (state = initialState, action) => {    
    switch(action.type){
        case ADD_NUMBERS:
            return {
                ...state,
                "sum" : action.payload.sum
            }
        case RESET:
            return {
                ...state,
                "sum" : 0
            }
        default:
            return state;    
    }
}

export default addNumReducer;