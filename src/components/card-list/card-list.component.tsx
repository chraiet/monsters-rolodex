import React from 'react'
import './card-list.styles.css'
import Monster from '../../types/Monster'
import Card from '../card/card.component'

type Props = {
    monsters: Monster[]
}

const CardList: React.FC<Props> = (props) => {
    
    return (
        <div className="card-list">
            {props.monsters.map(monster => <Card key={monster.id} monster={monster}/>)}
        </div>
    )
}

export default CardList