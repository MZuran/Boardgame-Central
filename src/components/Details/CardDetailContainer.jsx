import React, { useState, useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import CardDetail from './CardDetail'
import { useParams } from 'react-router-dom'

const CardDetailContainer = () => {
  const { cardName } = useParams()

  let data = useFetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(cardName)}`,
    [cardName],
  )

  let cardData = null
  if (data[0] !== null) {
    console.log(data[0].data[0])
    cardData = data[0].data[0]
  }

  useEffect(() => {
    console.log(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(cardName)}`,
      [cardName],
    )
  }, [cardName])

  return <>{cardData !== null && <CardDetail cardData={cardData} />}</>
}
export default CardDetailContainer
