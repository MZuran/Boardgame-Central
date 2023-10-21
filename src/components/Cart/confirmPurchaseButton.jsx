import React from 'react'
import { usePurchaseCostVariable } from '../../context/costContext'
import { useCartVariable } from '../../context/cartContext'
import { Button } from 'react-bootstrap'
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
    time: new Date().toLocaleTimeString()
  }

  function confirmPurchase() {
    insertDataInCollection([purchaseData], "purchases")
    clearPurchaseCost()
    clearCart()
  }

  return (
    <div>
      <Button onClick={() => {confirmPurchase()}}>
        Confirm purchase {'('}
        {purchaseCost}
        {'$)'}
      </Button>
    </div>
  )
}

export default ConfirmPurchaseButton
