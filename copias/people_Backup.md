import React from "react";
import { useParams } from "react-router-dom";


export default function(props) {
    const params = useParams()
    console.log(params)
    console.log(props)

    return (
        <div className="container">
            <div className="jumbotron">
                <h1>People {params.id} page</h1>
        
            </div>
        </div>
    )
}

