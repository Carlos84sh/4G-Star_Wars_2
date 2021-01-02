import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/index.js";


export default function(props) {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        // actions.getListFavorites()
        console.log("ha cambiado");
        
    }, [store.favorites])

    return (
        <nav className="navbar navbar-expand navbar-light mb-3">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"/>
                </a>
                <a className="resistencia">
                    <img src="https://cdn.designcrowd.com/blog/2015/December/star-wars-logos/GR_LogosFromStarWars_Banner_828x300.jpg"/>
                </a>
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Favorites
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {store.favorites.map((value, index) => {
                            return (
                                <a key={index} class="dropdown-item" href="#">
                                    {value}
                                    <button onClick={(event) => actions.deleteList(value)} type="button" className="close" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}