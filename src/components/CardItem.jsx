import React from 'react'
import getCardImage from '../Hooks/getCardImage'

const CardItem = (cardData) => {
    //console.log(cardData)
    //console.log(getCardImage(cardData.cardInfo.id))
    //console.log(cardData.cardInfo.name)
    const imgSrc = getCardImage(cardData.cardInfo.name)
  return (
    <div>
        <img src={imgSrc} alt={cardData.cardInfo.name} />
        <p>{cardData.cardInfo.name}</p>
      <p>{cardData.cardInfo.desc}</p>
    </div>
  )
}

export default CardItem
