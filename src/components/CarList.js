import React from 'react'
import { Link } from 'react-router-dom'

export default function CarList(props) {
    return (
        <div className="car-selection">
            {props.cars.map((car, index) => {
            return (
                <div className="car-box">
                    <img src={car.car.image} alt={car.car.name} />
                    <Link to={`/car/${index}`}>{car.car.name}</Link>
                </div>
            )
            })}
        </div>
    )
}