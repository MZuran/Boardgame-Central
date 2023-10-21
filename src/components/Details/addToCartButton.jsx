import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useCartVariable } from '../../context/cartContext'
import { usePurchaseCostVariable } from '../../context/costContext'
import { useEffect } from 'react'

const AddToCartButton = ({ cardId, maxStock, cardPrice }) => {
  const [quantity, setQuantity] = useState(1)
  const { addToCart, cart, countItemsInCart } = useCartVariable()
  const { addToPurchaseCost } = usePurchaseCostVariable()
  const [maxBuyingRange, setMaxBuyingRange] = useState(maxStock - countItemsInCart(cardId))

  useEffect(() => {
    setMaxBuyingRange(maxStock - countItemsInCart(cardId) > 0 ? maxStock - countItemsInCart(cardId) : 0);
  }, [cart, maxStock]);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10)

    // Ensure the new quantity is within the allowed range
    if (!isNaN(newQuantity) && newQuantity >= 0 && newQuantity <= maxBuyingRange) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    let newItem = []
    for (let i = 0; i < quantity; i++) {
      newItem.push(cardId)
    }
    console.log("gonna add", newItem)
    addToCart(newItem)
    setQuantity(0)
    addToPurchaseCost(quantity * cardPrice)
  }

  return (
    <div className="flex-row" style={{margin: 0}}>
      <Form.Control
        type="number"
        min="0"
        max={maxBuyingRange}
        value={quantity}
        onChange={handleQuantityChange}
        style={{ width: '4.5rem', marginRight: '5px' }}
      />
      <Button onClick={handleAddToCart}>Add to Cart</Button>
      {countItemsInCart(cardId) > 0 &&
      <span className="info-text" style={{ marginBottom: '0' }} > <i>Amount in cart: {countItemsInCart(cardId)}</i> </span>}
    </div>
  )
}

export default AddToCartButton
