'use strict';
import React, {Component, Fragment} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoCounter from './Container';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default class CounterExampleTwo extends Component{
    render(){
        return(
            <Provider store={store} >
                <TodoCounter />
            </Provider>            
        )
    }
}