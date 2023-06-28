import React from "react";
import  "./user.css"
const User =({info}) => {
    return (
        <div className="user_wrapper">
            <h1>{info.name}</h1>
            <h2>{info.email}</h2>
            <h2>{info.phone}</h2>
        </div>
    )
}

export default User;
