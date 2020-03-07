import React from 'react'
import Monster from '../../types/Monster'
import './card.styles.css'

type Props = {
    monster: Monster
}

const Card: React.FC<Props> = ({ monster }) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="monster"/>
            <h2 key={monster.id}>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    )
}

export default Card