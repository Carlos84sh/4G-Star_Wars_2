import React from "react";
import {useState, useEffect} from "react"

import { Link } from "react-router-dom";

import Card from "../components/card.js"

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
            //console.log(json["results"])
        })
    },[])

    useEffect(()=>{
        const endpoint = "https://swapi.dev/api/planets/";
        const config = {mode:"cors"}
        fetch(endpoint,config).then((response)=>{
            return response.json()
        }).then((json)=>{
            setPlanets(json["results"])
            //console.log(json["results"])
        })
    },[])




    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Personajes</h1>
                <div className="scroll-horizontal">
                    {people.map((value,index)=>{
                        
                        

                    return (
                        <div key={index}>
                            {value['name']}
                            
                        </div>
                        
                        )
                    })}
                </div>
                
            </div>
            <div className="jumbotron">
                <h1>Planetas</h1>
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