'use strict';
import React, {Component, Fragment, useState} from 'react';


const AddNum = (props) => {
    const [stateObj, setStateObj] = useState({
        "numOne" : "",
        "numTwo" : ""
    });

    const [counterStyle, setCounterStyle] = useState({
        "fontSize" : "350px",
        "fontWeight" : "bold",
        "color" : "#483d8b"
    });

    const obj = {
        "sum" : props.sum,         
        "actionOps" : props.actionref
    }
    
    const submitForm = () => {
        let total = parseInt(stateObj.numOne) + parseInt(stateObj.numTwo);                               
        obj.actionOps.addNum({
            "sum" : total // action.payload.sum
        });
    }

    const resetForm = () => {
        setStateObj({
            "numOne" : "",
            "numTwo" : ""
        });
        obj.actionOps.reset();
    }

    return (
        <Fragment>
            <form className="form-inline">
                <div className="form-group">
                    <label  for="numOneId" 
                            className="sr-only">Num One</label>
                    <input  type="text" 
                            className="form-control" 
                            id="numOneId" 
                            placeholder="Num One" 
                            value={stateObj.numOne}
                            onChange={event => setStateObj({
                                ...stateObj,  
                                "numOne" : event.target.value
                            })} />
                </div>
                &nbsp;
                <div className="form-group">
                    <label  for="numTwoId" 
                            className="sr-only">Num Two</label>
                    <input  type="text" 
                            className="form-control" 
                            id="numTwoId" 
                            placeholder="Num Two"
                            value={stateObj.numTwo} 
                            onChange={(event) =>{
                                setStateObj({
                                    ...stateObj,
                                    "numTwo" : event.target.value
                                });
                            }}/>
                </div>
                &nbsp;
                <button type="button" 
                        className="btn btn-primary"
                        onClick={submitForm}>Add</button>
                &nbsp;
                <button type="button" 
                        className="btn btn-default"
                        onClick={resetForm}>Reset</button>        
            </form>
            <div>
                <span style={counterStyle}>{obj.sum}</span>
            </div>
        </Fragment>
    )
     
}

export default AddNum;