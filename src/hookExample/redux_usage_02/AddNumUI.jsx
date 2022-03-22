'use strict';
import React, {Component, Fragment} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AddNumContainer from './AddNumContainer';
import rootReducer from './reducer';

const store = createStore(rootReducer);

const AddNumUI = () => {
    return (
        <Provider store={store}>
            <AddNumContainer />
        </Provider>
    );
} 

export default AddNumUI;