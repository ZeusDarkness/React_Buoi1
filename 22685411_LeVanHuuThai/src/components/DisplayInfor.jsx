import React from "react";

export default function DisplayInfor({ listUser, onDeleteUser }) {
    console.log(listUser);
    return (
        <div>
            {listUser.length == 0 && <h1>Da xoa het danh sach</h1>}
            {listUser.map((user) => {
                return (
                    <div
                        key={user.id}
                        className={user.Age < 18 ? "red" : "blue"}
                    >
                        <div>My name is: {user.Name}</div>
                        <div>My Age: {user.Age}</div>
                        <button onClick={() => onDeleteUser(user.id)}>
                            Delete
                        </button>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}
