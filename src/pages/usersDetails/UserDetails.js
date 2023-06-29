import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { fetchUser } from "../../api/users";
import "./userDetails.css"


const UserDetails = () => {
    const {userID} = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [ user, setUser] = useState({})


    useEffect(() => {
        const apiValues= []

        for (const param of searchParams.entries()){
            const [key, value] = param
            apiValues.push({
                key,
                value,
            });
        console.log(apiValues);
    }
        fetchUser(userID).then(data=> {
            setUser(data)
        })
    },[userID, searchParams])

    return(
        <div className="userDetails_div">
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <h2>{user.adress?.street}</h2>
            <h2>{user.adress?.geo.lat}</h2>
            <h2>{user.website}</h2>
            <h2>{user.phone}</h2>
            <h2>{user.email}</h2>
            <button onClick={() => {
                navigate(-1)
            }} >Go Back</button>
        </div>
    )
}

export default UserDetails;