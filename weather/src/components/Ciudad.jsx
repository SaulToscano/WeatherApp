import React from "react";
import { useParams } from "react-router-dom";

export default function Ciudad({city}) {
    var {ciudadId} = useParams()
    var cities = city
    
    function onFilter(ciudadId) {
        let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
        if(ciudad.length > 0) {
            return ciudad[0];
        } else {
            return null;
        }
    }

    var res = onFilter(ciudadId);

    return (
        <div className="ciudad">
                <div className="container">
                    <h2>{res.name}</h2>
                    <div className="info">
                        <div>Temperatura: {res.temp} ºC</div>
                        <div>Clima: {res.weather}</div>
                        <div>Viento: {res.wind} km/h</div>
                        <div>Cantidad de nubes: {res.clouds}</div>
                        <div>Latitud: {res.latitud}º</div>
                        <div>Longitud: {res.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}