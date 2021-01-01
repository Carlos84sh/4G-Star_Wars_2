import React from "react";

export default function(props) {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2020. Carlos Sánchez Huelves</p>
                <span>Estado: {store.loading ? "Cargando...":"Cargado"}</span> 
            </div>
        </footer>
    )
}