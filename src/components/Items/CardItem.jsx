import React from 'react'
import { Link } from 'react-router-dom'

const CardItem = (data) => {
  let cardData = data.cardData
  return (
    <div className="card-item">
      <div>
        <Link to={`/card/${cardData.id}`}>
          <img src={cardData.pictureSource} alt={cardData.name} />
        </Link>
      </div>
      <div>
        <p>
          {cardData.name} <br /> <i>{cardData.price}$</i><br/> <i>Stock: {cardData.stock}</i>
        </p>
      </div>
    </div>
  )
}

export default CardItem
