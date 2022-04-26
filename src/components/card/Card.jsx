import React from "react"
import "./card.css"

export default function Card({characters}) {
    return (
        <div className="card-container">
            { characters.map((char, i)=>(
                <div key={i} className="card">
                    <img src={char.image} alt="" className="card-img"/>
                    <h3>{char.name}</h3>
                    <p>{char.species}-{char.origin.name}</p>
                    <p>{char.status}</p>
                </div>
            ))}
        </div>
    )
}