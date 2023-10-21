import React, { useContext, useEffect } from 'react'
import { createContext } from 'react'
import FocusTracker from '../Hooks/focusTracker'
import { useState } from 'react'

const CartVariable = React.createContext()

export function CartContextProvider({ children }) {
  const isFocused = FocusTracker()
  const storedCart = JSON.parse(localStorage.getItem('cart')) || []
  const [cart, setCart] = useState(storedCart)

  //This useffect is responsible for allowing the cart to work seamlessly across different tabs
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || [])
  }, [isFocused])

  const addToCart = (newItem) => {
    const newCart = [...cart, ...newItem]
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  const countItemsInCart = (id) => cart.filter(item => item === id).length;

  const popCart = (id) => {
    const storedCart = localStorage.getItem('cart');
    const cartArray = storedCart ? JSON.parse(storedCart) : [];
    const indexToRemove = cartArray.findIndex(item => item === id);
    if (indexToRemove !== -1) {
      cartArray.splice(indexToRemove, 1);
      localStorage.setItem('cart', JSON.stringify(cartArray));
      setCart(cartArray)
    }
  }

  const clearCart = () => {
    localStorage.setItem('cart', JSON.stringify([]))
    setCart([])
  }

  return (
    <>
      <CartVariable.Provider value={{ cart, addToCart, clearCart, countItemsInCart, popCart }}>
        {children}
      </CartVariable.Provider>
    </>
  )
}

export function useCartVariable() {
  return useContext(CartVariable)
}
