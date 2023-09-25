import React from 'react'
import getCardImage from '../../Hooks/getCardImage'

const CardItem = (cardData) => {
  const imgSrc = getCardImage(cardData.cardInfo.name)
  let price

  if (cardData.cardInfo.card_prices[0].tcgplayer_price == 0) {
    price = "not available"
  } else {
    price = cardData.cardInfo.card_prices[0].tcgplayer_price + "$"
  }

  return (
    <div className="card-item">
      <div>
        <img src={imgSrc} alt={cardData.cardInfo.name} />
      </div>
      <div>
        <p>
          {cardData.cardInfo.name} <br />{' '}
          <i>{price}</i>
        </p>
      </div>
    </div>
  )
}

export default CardItem
