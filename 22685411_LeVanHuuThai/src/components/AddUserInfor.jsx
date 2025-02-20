import React, { useState } from "react";

export default function AddUerInfo({ onAddNewUser, onDeleteAllUser }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleOnSubmit = (event) => {
        event.preventDefault(); //ngăn việc tải lại trang
        onAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + "user",
            Name: name,
            Age: age,
        });
    };

    const handleOnchangeName = (event) => {
        setName(event.target.value);
    };

    const handleOnchangeAge = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <form action="" >
                <div>
                    <span> Your Name:</span>
                    <input
                        type="text"
                        value={name} //gán giá trị mặc định
                        onChange={(event) => handleOnchangeName(event)}
                    />
                </div>

                <div>
                    <span> Your Age:</span>
                    <input
                        type="text"
                        value={age} //gán giá trị mặc định
                        onChange={(event) => handleOnchangeAge(event)}
                    />
                </div>
                <button onClick={(event) => handleOnSubmit(event)}>Submit</button>
                <button onClick={(event) => onDeleteAllUser(event)}>Delete All</button>
            </form>
        </>
    );
}
