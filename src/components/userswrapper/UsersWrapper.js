import React, {useEffect, useState} from "react";
import {fetchUsers} from "../../api/users"
import {CircleLoader} from "react-spinners"
import User from "../user/User";
import "./userWrapper.css"

const UsersWrapper = () => {
    const [users, setUsers] = useState([]);
    const [err, setErr] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchUsers().then((data)=>{
            setUsers(data);
        }).catch(err=>{
            setErr(err.message);
        }).finally(() => {
            setIsLoading(false)
        });
    },[]);

    if(err) {
        <div>something unexpected happened</div>
    }
    return (
        <div className="users_wrapper">
            {isLoading && <CircleLoader color="#36d7b7" />}
            {users.map((user) =>(
                <User key={user.id} info={user} />
            ))}
        </div>
    )
}

export default UsersWrapper;
