import React from "react";
import {useState, useEffect} from "react"

export default function(props) {

    const [people,setPeople] = useState([])
    const [planets,setPlanets] = useState([])

    useEffect(()=>{
        const endpoint = "https://swapi.dev/api/people/";
        const config = {mode:"cors"}
        fetch(endpoint,config).then((response)=>{
            return response.json()
        }).then((json)=>{
            setPeople(json["results"])
            console.log(json["results"])
        })
    },[])

    useEffect(()=>{
        const endpoint = "https://swapi.dev/api/planets/";
        const config = {mode:"cors"}
        fetch(endpoint,config).then((response)=>{
            return response.json()
        }).then((json)=>{
            setPlanets(json["results"])
            console.log(json["results"])
        })
    },[])

    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Home page</h1>
                {people.map((value,index)=>{
                    return (
                        <div key={index}>
                            {value['name']}
                        </div>
                        
                    )
                })}
                {planets.map((value,index)=>{
                    return (
                        <div key={index}>
                            {value['name']}
                        </div>                        
                    )
                })}
            </div>
        </div>
    )
}