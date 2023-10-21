import React, { useEffect, useState } from 'react'
import { useCartVariable } from '../../context/cartContext'
import { Link } from 'react-router-dom'

export default function CartWidget() {
  const { cart } = useCartVariable()
  const [number, setNumber] = useState(cart.length)

  useEffect(() => {
    setNumber(cart.length)
    //console.log('change of focus', number)
  }, [cart])

  return (
    <div className="cart-widget">
      <Link to={'/cart'}><img className='cart-picture'/></Link>
      <div className="items-counter">
        <p>{number}</p>
      </div>
    </div>
  )
}
