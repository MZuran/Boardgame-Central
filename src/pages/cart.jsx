import React, { useEffect } from 'react'
import CartItem from '../components/Cart/cartItem'
import { useCartVariable } from '../context/cartContext'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ConfirmPurchaseButton from '../components/Cart/confirmPurchaseButton'

export default function Cart() {
  const user = JSON.parse(localStorage.getItem('user'))
  const [data, setData] = useState(null)
  const { cart } = useCartVariable()
  const centerClass = 'd-flex justify-content-center align-items-center'

  useEffect(() => {
    let itemArray = []

    for (let i = 0; i < cart.length; i++) {
      itemArray.push(<CartItem itemId={cart[i]} key={`cartItem${i}`} />)
    }
    setData(itemArray)
  }, [cart])

  return (
    <>
      {user !== null && (
        <div>
          <p className={'text-muted ' + centerClass}> Logged in as {user.name} </p>
          <Link to={'/login'}>
            <p style={{ cursor: 'pointer', textDecorationLine: 'underline' }} 
            className={'text-muted ' + centerClass} > Is this not you? </p>
          </Link>
            <div className={centerClass}>
              <div>{cart.length > 0 && data}</div>
              {cart.length == 0 && <h3> Your cart is empty! </h3>}
            </div>
        </div>
      )}

        {user == null && 
        <Link to={'/login'}>
        <p style={{ cursor: 'pointer', textDecorationLine: 'underline' }} 
        className={'text-muted ' + centerClass} > Log In to access the cart </p>
      </Link>
        }
        {user !== null && cart.length > 0 && 
        <div className={centerClass}>
          <ConfirmPurchaseButton/>
        </div>}
    </>
  )
}
