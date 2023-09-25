import React from 'react'
import useFetch from '../../Hooks/useFetch'
import CardDetail from './CardDetail'
import { useParams } from 'react-router-dom'

const CardDetailContainer = () => {
  const { cardName } = useParams()
  const data = useFetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${cardName}`,
  )

  let cardData = null
  if (data[0] !== null) {
    cardData = data[0].data[0]
  }

  return (
    <>
      <h1>{cardName}</h1>
      {cardData !== null && <CardDetail cardData={cardData}/>}
    </>
  )
}
export default CardDetailContainer
