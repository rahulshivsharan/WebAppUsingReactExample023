'use strict';

import { combineReducers } from 'redux';
import addNumReducer from './AddNumReducer';

export default combineReducers({
  "addNumReducer" : addNumReducer
});
