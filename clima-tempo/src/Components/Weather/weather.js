import React from 'react'

const Weather = props => (

    <div>
        {props.city && props.country && <p>Localidade: {props.city}, {props.country}</p>}
        {props.temperature && <p>Temperatura: {props.temperature}</p>}
        {props.humidity && <p>Humidade: {props.humidity}</p>}
        {props.description && <p>Condição: {props.description}</p>}
        {props.error && <p>{props.error}</p>}
    </div>
)

export default Weather