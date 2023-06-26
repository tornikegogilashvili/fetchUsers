import React from "react"
import { Link } from "react-router-dom"




const Users = () => {
    return (
        <div>
            <h1>users component</h1>
            <button>
                <Link to="/" >Home Page</Link>
            </button>
        </div>
    )
}

export default Users