import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/index.js";

export default function({name,children,resource,id}) {  //arriesgandome destructurando el pros
    const { store, actions } = useContext(Context);

    let path = "/"+resource+"/"+id; 
    
    let imgRandom = Math.floor((Math.random()*1000)+1)
    let pathImg = "https://picsum.photos/400/200?random="+imgRandom;

    return(
        <div className="container">
                <div className="card">
                <img src={pathImg} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Nombre: {name}</h5>
                    {children}
                    <div className="row justify-content-between">
                        <div className="col-4 text-left">
                            <Link to={path} className="btn btn-primary" id="button-info">Learn More!</Link>
                        </div>
                        <div className="col-8 text-right">
                            <button type="button" className={store.favorites.includes(name) ? "btn btn-danger" : "btn btn-warning"} onClick={event => actions.addList(props.name)}>
                                {store.favorites.includes(name) ? "Remove from Favorites" : "Add to Favorites"}

                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
};


