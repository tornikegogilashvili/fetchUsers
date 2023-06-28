import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../api/users";


const UserDetails = () => {
    const [ user, setUser] = useState({})
    const {userID} = useParams();
    useEffect(() => {
        fetchUser(userID).then(data=> {
            setUser(data)
        })
    },[userID])

    return(
        <div>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            <h1>{user.adress?.street}</h1>
            <h1>{user.website}</h1>
        </div>
    )
}

export default UserDetails;