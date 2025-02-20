import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUerInfo from "./AddUserInfor";
export default function Mycomponent() {
    const [listUser, setListUser] = useState([
        { id: 1, Name: "Dung", Age: 49 },
        { id: 2, Name: "Hoang", Age: 17 },
        { id: 3, Name: "Chien", Age: 32 },
    ]);

    const handleAddNewUser = (userObject) => {
        if(listUser.length >= 10){
            return;
        }
        setListUser([userObject, ...listUser]);
    };
    const handleDeleteUser = (userID) => {
        let listUserClone = listUser;
        listUserClone = listUserClone.filter((item) => item.id !== userID);
        setListUser(listUserClone);
    };
    const handleDeleteAllUser = (event) => {
        event.preventDefault();
        setListUser([])
    }
    return (
        <div>
            {listUser.length === 10 && alert("Da full")}
            <AddUerInfo onAddNewUser={handleAddNewUser} onDeleteAllUser = {handleDeleteAllUser}></AddUerInfo>
            <h2>Hide list user</h2>
            <hr />
            <DisplayInfor
                listUser={listUser}
                onDeleteUser={handleDeleteUser}
                
            ></DisplayInfor>
        </div>
    );
}
