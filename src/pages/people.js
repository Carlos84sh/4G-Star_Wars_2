import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/index.js";

export default function(props) {
    const params = useParams()
    const { store, actions } = useContext(Context);

    let person = store.people[params.index] 
    
    return (
        <div className="container">
            <div className="row height-body align-items-center">
                <div className="col-6 text-center">
                    <img src="https://picsum.photos/480/250">
                    </img>
                </div>
                <div className="col-6 text-center pr-5">
                    <h1>{person.name}</h1>
                    <p>
                        Lorem fistrum ese que llega no puedor la caidita te voy a borrar el cerito al ataquerl pupita qué dise usteer diodeno quietooor. A gramenawer de la pradera a gramenawer no puedor no puedor a wan. Hasta luego Lucas a peich a wan tiene musho peligro torpedo jarl caballo blanco caballo negroorl a peich de la pradera no te digo trigo por no llamarte Rodrigor.
                    </p> 
                </div>
            </div>
            <div className="divider-pink"></div>
            
            <div className="row">
                <div className="col-2 text-center pink-text">
                    <h5>Name</h5>
                    <p>{person.name}</p>
                </div>
                <div className="col-2 text-center pink-text">
                    <h5>Birth Year</h5>
                    <p>{person.birth_year}</p>
                </div>
                <div className="col-2 text-center pink-text">
                    <h5>Gender</h5>
                    <p>{person.gender}</p>
                </div>
                <div className="col-2 text-center pink-text">
                    <h5>Height</h5>
                    <p>{person.height}</p>
                </div>
                <div className="col-2 text-center pink-text">
                    <h5>Skin Color</h5>
                    <p>{person.skin_color}</p>
                </div>
                <div className="col-2 text-center pink-text">
                    <h5>Eye Color</h5>
                    <p>{person.eye_color}</p>
                </div>
            </div>
        </div>
    )
}