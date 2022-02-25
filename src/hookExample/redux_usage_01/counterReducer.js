'use strict';

import {INCREMENT, RESET} from './action';

const counterReducer = (state = {"count" : 0}, action) => {
    let count = state.count;
    switch(action.type){
        case INCREMENT:
            return {
                "count" : (count + 1)
            }
        case RESET:
            return {
                "count" : 0
            }
        default:
            return state;        
    }
}

export default counterReducer;