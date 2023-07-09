import React from 'react'
import "./card.css"

const Card = (props) => {
    return (
        <div className="card-container">
            <p>{props.name}</p>
        </div>
    )
}

export default Card
