import React from "react";
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <div>
            <h1>Home Component</h1>
            <button>
                <Link to="/Users" >
                    users component
                </Link>
            </button>
        </div>
    );
};

export default Home;