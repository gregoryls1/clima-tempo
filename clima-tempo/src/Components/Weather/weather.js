import React from 'react'

const Weather = props => (

    <div className="form-row mt-2">
        <div className="col-12">
            {props.city && props.country && <h3>{props.city}, {props.country}</h3>}
        </div>
        <div className="col-6">
            {props.temperature && <p>Temperatura</p>}
            {props.temperature && <p>{Math.round(props.temperature / 10) - 1}º</p>}
        </div>
        <div className="col-6">
            {props.humidity && <p>Humidade</p>}
            {props.humidity && <p>{props.humidity}%</p>}
        </div>
        <div className="col-6">
            {props.description && <p>Nuvens</p>}
            {props.description && <p>{props.description}</p>}
        </div>
        <div className="col-12">
            {props.error && <p>{props.error}</p>}
        </div>
    </div>
)

export default Weather