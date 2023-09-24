import React from 'react'
import getCardImage from '../../Hooks/getCardImage'

const CardDetail = (cardData) => {
  //console.log(cardData.cardInfo.card_prices[0].tcgplayer_price)
  //console.log(getCardImage(cardData.cardInfo.id))
  //console.log(cardData.cardInfo)
  const imgSrc = getCardImage(cardData.cardInfo.name)

  let isMonster = true
  if (
    cardData.cardInfo.type == 'Spell Card' ||
    cardData.cardInfo.type == 'Trap Card'
  ) {
    isMonster = false
  }

  return (
    <div className="card-detail">
      <div>
        <img src={imgSrc} alt={cardData.cardInfo.name} />
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
          Price: {cardData.cardInfo.card_prices[0].tcgplayer_price}${' '}
          <i>tcgplayer.com</i>
        </p>
      </div>
    </div>
  )
}

export default CardDetail
