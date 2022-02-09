import React from 'react'; 

export const ErrorPanel = () => {
    return (
        <div className="panel panel-danger">
            <div className="panel-heading">Error</div>
            <div className="panel-body" style={{"color":"#a94442", "font-weight" : "bold"}}>
                Some Error occurred !!!.
            </div>
        </div>
    );
};

