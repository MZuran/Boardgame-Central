import React, { useContext, useEffect } from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import FocusTracker from '../Hooks/focusTracker'

const PurchaseCostVariable = React.createContext()

export function PurchaseCostContextProvider({ children }) {
  const isFocused = FocusTracker()
  const [purchaseCost, setPurchaseCost] = useState(0)

  //This useffect is responsible for allowing the cart to work seamlessly across different tabs
  useEffect(() => {
    setPurchaseCost(Number(localStorage.getItem('cartPrice')) || 0)
  }, [isFocused])

  const addToPurchaseCost = (newAmount) => {
    //const oldPurchaseCost = purchaseCost.toFixed(2)
    let newPurchaseCost = (Number(purchaseCost) + Number(newAmount))
    newPurchaseCost = newPurchaseCost.toFixed(2)
    setPurchaseCost(newPurchaseCost)
    localStorage.setItem('cartPrice', newPurchaseCost)
  }

  const clearPurchaseCost = (newAmount) => {
    localStorage.setItem('cartPrice', 0)
    setPurchaseCost(0)
  }

  return (
    <>
      <PurchaseCostVariable.Provider
        value={{ purchaseCost, addToPurchaseCost, clearPurchaseCost }}
      >
        {children}
      </PurchaseCostVariable.Provider>
    </>
  )
}

export function usePurchaseCostVariable() {
  return useContext(PurchaseCostVariable)
}
