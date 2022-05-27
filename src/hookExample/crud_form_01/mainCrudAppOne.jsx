import React, { useState, Fragment} from 'react';
import AddUserForm from './AddUsers';
import EditUserForm from './EditUserForm';
import UserTable from './UserTable';

const MainCRUDAppOne = () => {

    const usersData = [
        { id: 1, name: 'John Hopkins', username: 'johnh' },
        { id: 2, name: 'Victor Reeds', username: 'victorr' },
        { id: 3, name: 'John Symons', username: 'johns' },
    ];


    const initialState = {
        id: null, 
        name: '',
        username: ''
    };

    const [users, setUsers] = useState(usersData);    
    const [currentUser, setCurrentUser] = useState(initialState);
    const [editing, setEditing] = useState(false);   

    const editRow = (user) => {
        setEditing(true);
        setCurrentUser({
            "id" : user.id,
            "name" : user.name,
            "username" : user.username
        });
    };

    const deleteUser = (id) => {
        setEditing(false);
        setUsers(users.filter(user => user.id !== id));
    }; 

    const updateUser = (id, updatedUser) => {        
        setEditing(false);
        setUsers(users.map((user) => {
            return (user.id === id) ?  updatedUser : user;
        }));
    }

    const addNewUser = (user) => {
        user.id = users.length + 1;                
        var updatedUserList = [];

        users.forEach((userObj,idx)=>{
            updatedUserList.push(userObj);
        });

        updatedUserList.push(user);
        setUsers(updatedUserList);
    }

    return (
        <div className="container">
            <div className="page-header">
                <h1><b>CRUD App With Hooks</b></h1>
            </div>
            <div className="row">
                <div className="col-md-4">
                    {(editing === false) ? (
                            <Fragment>
                                <h3>Add User</h3>
                                <AddUserForm addNewUser={addNewUser}/>
                            </Fragment>
                    ) : (
                            <Fragment>
                                <h3>Edit User</h3>
                                <EditUserForm 
                                    editing={editing}
                                    setEditing={setEditing}
                                    currentUser={currentUser} 
                                    updateUser={updateUser} />
                            </Fragment>
                    )} 
                </div>
                <div className="col-md-8">
                    <Fragment>
                        <h3>View Users</h3>
                        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
                    </Fragment>
                </div>
            </div>            
        </div>
    );
}

export default MainCRUDAppOne;