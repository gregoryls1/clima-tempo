import React, { Component } from 'react'

const Form = props => (

    <form onSubmit={props.getWeather}>
        <div class="form-row">
            <div className="form-group col-8">
                <input type="text" className="form-control" name="city" placeholder="Cidade" />
            </div>
            <div className="form-group col-4">
                <input type="text" className="form-control" name="country" placeholder="País" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Consulte</button>
        </div>
    </form>
)

export default Form