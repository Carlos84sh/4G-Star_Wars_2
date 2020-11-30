import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/">Home</Link>
               
                <Link to="/users/2">Usuario 2</Link>
            </div>
        </nav>
    )
}