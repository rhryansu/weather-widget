import { useState, useEffect } from 'react';
import Card from './card.component';
const CardsList = ({cards}) => {
  
  return (
    <div className="cards-list">
      <div className="card" >
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  )
}

export default CardsList;