import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
    return (
        <nav className="navbar">
            <div className="container">
                <img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-logo-tm.jpg"  height="100"  width="200"/>
               
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Favorites
                    </button>
                </div>
            </div>
        </nav>
    )
}