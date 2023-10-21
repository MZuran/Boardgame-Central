import React from 'react'
import { usePurchaseCostVariable } from '../../context/costContext'
import { useCartVariable } from '../../context/cartContext'
import { Button } from 'react-bootstrap'
import updateItemFromCollection from '../../Hooks/firebase/updateItemFromCollection'
import { increment } from 'firebase/firestore'
import insertDataInCollection from '../../Hooks/firebase/insertDataInCollection'


function ConfirmPurchaseButton() {
  const { purchaseCost, clearPurchaseCost } = usePurchaseCostVariable()
  const { cart, clearCart } = useCartVariable()
  const user = JSON.parse(localStorage.getItem('user'))

  const purchaseData = {
    itemsId: cart,
    payment: purchaseCost,
    buyerName: user.name,
    buyerEmail: user.email,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  }

  function confirmPurchase() {
    insertDataInCollection([purchaseData], "purchases")
    for (let i = 0; i < cart.length; i++) {
      updateItemFromCollection(cart[i], {stock: increment(-1)})
    }
    clearPurchaseCost()
    clearCart()
  }

  return (
    <div>
      <Button onClick={() => { confirmPurchase() }} > Confirm purchase {'('} {purchaseCost} {'$)'} </Button>
    </div>
  )
}

export default ConfirmPurchaseButton
