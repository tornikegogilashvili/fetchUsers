import React from "react";
import  "./user.css"
import { useNavigate, useParams } from "react-router-dom";
import routes from "../../conf/constants/routes";


const User =({info}) => {

const navigate = useNavigate();

    return (
        <div className="user_wrapper">
            <h1>{info.name}</h1>
            <h2>{info.email}</h2>
            <h2>{info.phone}</h2>
            <button className="user_wrapper_button" onClick={() =>{
                navigate(`${routes.USERS_ROUTE}/${info.id}`)
            }} >details page</button>
        </div>
    )
}

export default User;
