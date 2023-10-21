import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useCartVariable } from '../../context/cartContext'
import AddToCartButton from './addToCartButton'
import CardDetailText from './CardDetailText'

const CardDetail = (data) => {
  const cardData = data.cardData
  const { addToCart, cart, clearCart } = useCartVariable()

  return (
    <div className="card-detail">
      <div> <img className="image-container" src={cardData.pictureSource} alt={cardData.name} /> </div>

      <div>
        <CardDetailText cardData={cardData}/>
        <div className="navigation-buttons-container">
          <AddToCartButton cardPrice={cardData.price} cardId={data.cardId} maxStock={cardData.stock}>Add To Cart</AddToCartButton>
        </div>
        <button onClick={() => { clearCart() }} >clearCart</button>
        <button onClick={() => { console.log(cart) }} >Cart</button>
      </div>
    </div>
  )
}

export default CardDetail
