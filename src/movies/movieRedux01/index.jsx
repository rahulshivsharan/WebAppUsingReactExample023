'use strict';
import React, {Component, Fragment} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';
import rootReducer from './reducer';

const store = createStore(rootReducer); 

const SearchMovieUI = () => {
    return (
        <Provider store={store}>
            <MovieSearchContainer />     
        </Provider>
    );
}

export default SearchMovieUI;