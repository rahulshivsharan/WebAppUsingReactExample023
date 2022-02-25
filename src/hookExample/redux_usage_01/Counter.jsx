'use strict';
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component{

    constructor(props){
        super(props);
        this.state = {
            "counterStyle" : {
                "fontSize" : "350px",
                "fontWeight" : "bold",
                "color" : "#483d8b"
            }
        }
    }

    render(){
        const obj = {
            "counterVal" : this.props.counterVal, 
            "actions" : this.props.actions
        }
        return(
            <Fragment>
                <div>
                    <span style={this.state.counterStyle}>{obj.counterVal}</span>                      
                    <button type="button" 
                            className="btn btn-primary" 
                            onClick={obj.actions.increment}>Increment</button>            
                    &nbsp;        
                    <button type="button" 
                            className="btn btn-primary" 
                            onClick={obj.actions.reset}>Reset</button>                    
                </div>
            </Fragment>
        )
    }
}

Counter.propTypes = {
    "counterVal" : PropTypes.number.isRequired
}

export default Counter;