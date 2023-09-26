import getCardImage from '../../Hooks/getCardImage'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'


const CardDetail = (data) => {
  /* useEffect(() => {
    console.log(data.cardData.name)
  }, [data]) */
  const cardData = data.cardData
  let price = cardData.card_prices[0].tcgplayer_price
  const cardName = cardData.name
  const imgSrc = getCardImage(cardName)

  if (price == 0) {
    price = 'not available'
  } else {
    price = price + '$'
  }

  return (
    <div className="card-detail">
      <div>
        <img className="image-container" src={imgSrc} alt={cardData.name} />
      </div>

      <div>
        <div>
          <p>{cardData.name}</p>

          <p>
            {cardData.atk !== null && `ATK/${cardData.atk} `}
            {cardData.def !== null && `DEF/${cardData.def} `}
          </p>

          <p>
            {cardData.level && `Level/Rank ${cardData.level} `}
            {cardData.linkval && `Link-${cardData.linkval} `}
            {cardData.attribute && `${cardData.attribute} `}
            {cardData.race} {cardData.type}
          </p>

          {cardData.scale && <p>Scale: {cardData.scale}</p>}
          <p>{cardData.desc}</p>
          {cardData.archetype && <p>
            Archetype: {cardData.archetype} <span className="info-text"><i>may not be completely accurate!</i></span>
          </p>}
          <p>
            Price: {price} <i><span className="info-text">(tcgplayer.com)</span></i>
          </p>
        </div>
        <div className='navigation-buttons-container'>
        {cardData.archetype && <Link to={`/type/archetype=${cardData.archetype}/0`}><Button>Related Cards</Button></Link>}
        <Link to={`/`}><Button>Go Back</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default CardDetail
