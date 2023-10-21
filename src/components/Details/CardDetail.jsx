import React from 'react'
import AddToCartButton from './addToCartButton'
import CardDetailText from './CardDetailText'

const CardDetail = (data) => {
  const cardData = data.cardData

  return (
    <div className="card-detail">
      <div> <img className="image-container" src={cardData.pictureSource} alt={cardData.name} /> </div>

      <div>
        <CardDetailText cardData={cardData}/>
        <div className="navigation-buttons-container">
          <AddToCartButton cardPrice={cardData.price} cardId={data.cardId} maxStock={cardData.stock}>Add To Cart</AddToCartButton>
        </div>
      </div>
    </div>
  )
}

export default CardDetail
