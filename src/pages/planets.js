import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/index.js";

export default function(props) {
    const params = useParams()
    const { store, actions } = useContext(Context);

    let planet = store.planets[params.index] 

    return (
         <div className="container">
            <div className="row height-body align-items-center">
                <div className="col-6 text-center">
                    <img src="https://picsum.photos/480/250">
                    </img>
                </div>
                <div className="col-6 text-center pr-5">
                    <h1>{planet.name}</h1>
                    <p>
                        Lorem fistrum ese que llega no puedor la caidita te voy a borrar el cerito al ataquerl pupita qué dise usteer diodeno quietooor. A gramenawer de la pradera a gramenawer no puedor no puedor a wan. Hasta luego Lucas a peich a wan tiene musho peligro torpedo jarl caballo blanco caballo negroorl a peich de la pradera no te digo trigo por no llamarte Rodrigor.
                    </p> 
                </div>
            </div>
            <div className="divider-pink"></div>
            
            <div className="row">
                <div className="col-2 text-center pink-text">
                    <h5>Name</h5>
                    <p>{planet.name}</p>
                </div>
                <div className="col-2 text-center pink-text">
                    <h5>Climate</h5>
                    <p>{planet.climate}</p>
                </div>
                <div className="col-2 text-center pink-text">
                    <h5>Population</h5>
                    <p>{planet.population}</p>
                </div>
                <div className="col-2 text-center pink-text">
                    <h5>Orbiltal Period</h5>
                    <p>{planet.orbital_period}</p>
                </div>
                <div className="col-2 text-center pink-text">
                    <h5>Rotation Period</h5>
                    <p>{planet.rotation_period}</p>
                </div>
                <div className="col-2 text-center pink-text">
                    <h5>Diameter</h5>
                    <p>{planet.diameter}</p>
                </div>
            </div>
        </div>
    )
}