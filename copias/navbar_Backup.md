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
        <nav className="navbar navbar-expand navbar-light bg-light mb-3">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-logo-tm.jpg"  height="100"  width="200"/>
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