'use strict';

import { combineReducers } from "redux";
import movieSearchReducer from './MovieSearchReducer';

export default combineReducers({
    "movieSearchReducer" : movieSearchReducer
});