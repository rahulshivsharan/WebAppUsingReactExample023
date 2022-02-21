import React, { Fragment, useState, useEffect } from 'react'; 

const CounterExampleOne = () => {

    const [counter, setCounter] = useState(0);
    const [counterStyle, setCounterStyle] = useState({
        "fontSize" : "350px",
        "fontWeight" : "bold",
        "color" : "#483d8b"
    }); 
    const increment = (prev_val) => {        
        setCounter(1 + prev_val);
    }

    return (
        <div>
            <span style={counterStyle}>{counter}</span>            
            <button type="button" 
                    className="btn btn-primary" 
                    onClick={()=>{                
                        increment(counter);
                    }}>Increase</button>            
        </div>
    );
}

export default CounterExampleOne; 