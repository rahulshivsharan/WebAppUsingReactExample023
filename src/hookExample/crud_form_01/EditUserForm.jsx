import React, { useState, useEffect } from 'react';


const EditUserForm = (props) => {

    const [user, setUser] = useState(props.currentUser);

    useEffect(() => {        
        setUser(props.currentUser);        
    }, [props]);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        
        if(name === "customerName"){
            setUser({
                "name" : value,
                "username" :  user.username,
                "id" :  user.id
            });
        }

        if(name === "customerUserName"){
            setUser({
                "username" : value,
                "name" : user.name,
                "id" :  user.id
            });
        }        
    }

    return (
        <form onSubmit={(event) => {            
            event.preventDefault();
            props.updateUser(user.id, user);
        }}>
            <div className="form-group">
                <label for="customerName">Name</label>
                <input id="customerName" name="customerName" value={user.name} className="form-control" onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <label for="customerUserName">Username</label>
                <input id="customerUserName" name="customerUserName" value={user.username} className="form-control" onChange={handleInputChange} />
            </div>
            <button className="btn btn-primary">Update User</button>
            &nbsp;        
            <button className="btn btn-primary" 
                    onClick={() => {
                        props.setEditing(false);
                    }}>Cancel</button>
        </form>
    )
}

export default EditUserForm;