import React from 'react'
import Card from './Card'

export default function CardList({monsters}) {
    const cardArray = monsters.map((monster, i) => {
        return <Card key={i} id={monsters[i].id} name={monsters[i].name} email={monsters[i].email} />
    })
    return (
        <div>
            {cardArray}
        </div>
    )
}
