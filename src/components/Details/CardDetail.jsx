import React from 'react'
import { useState } from 'react'
import getCardImage from '../../Hooks/getCardImage'

const CardDetail = (cardData) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const imgSrc = getCardImage(cardData.cardInfo.name)

  let price

  if (cardData.cardInfo.card_prices[0].tcgplayer_price == 0) {
    price = 'not available'
  } else {
    price = cardData.cardInfo.card_prices[0].tcgplayer_price + '$'
  }

  return (
    <div className="card-detail">
      <div>
        <img
          className="image-container"
          src={imgSrc}
          alt={cardData.cardInfo.name}
        />
      </div>

      <div>
        <p>{cardData.cardInfo.name}</p>

        <p>
          {cardData.cardInfo.atk && `ATK/${cardData.cardInfo.atk} `}
          {cardData.cardInfo.def && `DEF/${cardData.cardInfo.def} `}
        </p>

        <p>
          {cardData.cardInfo.level && `Level/Rank ${cardData.cardInfo.level} `}
          {cardData.cardInfo.linkval && `Link-${cardData.cardInfo.linkval} `}
          {cardData.cardInfo.attribute && `${cardData.cardInfo.attribute} `}
          {cardData.cardInfo.race} {cardData.cardInfo.type}
        </p>

        {cardData.cardInfo.scale && <p>Scale: {cardData.cardInfo.scale}</p>}
        <p>{cardData.cardInfo.desc}</p>
        <p>
          Price: {price}{' '}
          <i>(tcgplayer.com)</i>
        </p>
      </div>
    </div>
  )
}

export default CardDetail
