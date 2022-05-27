import React, { useState } from 'react'

const AddUserForm = (props) => {

    const initialFormState = {
        "name" : '',
        "username" : '',
        "id" :  null
    };

    const [user, setUser] = useState(initialFormState);

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
        <form onSubmit={(event) =>{
            event.preventDefault();
            if(!user.name || !user.username) return;

            props.addNewUser(user);
            setUser(initialFormState); // again setting form to blank
        }}>
            <div className="form-group">
                <label for="customerName">Name</label>
                <input id="customerName" name="customerName" value={user.name} className="form-control" onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <label for="customerUserName">Username</label>
                <input id="customerUserName" name="customerUserName" value={user.username} className="form-control" onChange={handleInputChange} />
            </div>
            <button type="submit" className="btn btn-primary">Add New User</button>
        </form>
    )
}

export default AddUserForm;