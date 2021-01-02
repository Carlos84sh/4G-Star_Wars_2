import React, {useContext} from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/index.js";

export default function({name,children,resource,id}) {    //props name,children,resource,id
    const { store, actions } = useContext(Context);

    const url = "/"+resource+"/"+id; 

    
    return (
        
        <div className="container">
                <div className="card">
                <img src="https://www.ecestaticos.com/imagestatic/clipping/d07/5c8/d075c806eaabc356e7bc1723e6026dc2/the-mandalorian-por-que-esta-arrasando-la-serie-de-star-wars-las-5-claves-de-su-exito.jpg?mtime=1579565836" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Nombre: {name}</h5>
                    {children}
                    
                    <div className="row justify-content-between">
                        <div className="col-4 text-left">
                            <Link to={url} className="btn btn-primary" id="button-info">Learn More!</Link>
                        </div>
                        <div className="col-8 text-right">
                            <button type="button" className={store.favorites.includes(name) ? "btn btn-danger" : "btn btn-warning"} onClick={event => actions.addList(name)}>
                                {store.favorites.includes(name) ? "Remove from Favorites" : "Add to Favorites"}

                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
            
        
                
    )
}