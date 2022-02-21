import React, { Fragment, useState, useEffect, useReducer } from 'react'; 

const AdderExampleOne = () => {

    const [numOne, setNumOne] = useState("");
    const [numTwo, setNumTwo] = useState("");    
    
    const [counterStyle, setCounterStyle] = useState({
        "fontSize" : "350px",
        "fontWeight" : "bold",
        "color" : "#483d8b"
    });

    const sumReducer = (state, action) => {
        switch(action.type){            
            case "SUM" :
                return {
                    ...state,
                    "sum" : action.payload
                }
            default:
                return state;    
        }
    }
    
    const [state, dispatch] = useReducer(sumReducer, {        
        "sum" : ""
    });

    const submitForm = ()=>{
        let total = parseInt(numOne) + parseInt(numTwo);
        
        dispatch({ 
            "type" : "SUM",
            "payload" : total 
        });
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
                            value={numOne}
                            onChange={event => setNumOne(event.target.value)} />
                </div>
                &nbsp;
                <div className="form-group">
                    <label  for="numTwoId" 
                            className="sr-only">Num Two</label>
                    <input  type="text" 
                            className="form-control" 
                            id="numTwoId" 
                            placeholder="Num Two"
                            value={numTwo} 
                            onChange={event => setNumTwo(event.target.value)} />
                </div>
                &nbsp;
                <button type="button" 
                        className="btn btn-primary"
                        onClick={submitForm}>Add</button>
            </form>
            <div>
                <span style={counterStyle}>{state.sum}</span>
            </div>
        </Fragment>
    )
}

export default AdderExampleOne;