import React, { useState, useEffect } from 'react'
import CardDetail from '../components/Details/CardDetail'
import { useParams } from 'react-router-dom'
import getItemFromCollection from '../Hooks/firebase/getItemFromCollection'

const CardDetailContainer = () => {
  const [data, setdata] = useState(null)
  const { cardId } = useParams()
  const collectionData = getItemFromCollection("cards", cardId)

  useEffect(() => {
    setdata(collectionData)
    }, [collectionData, cardId])

  return <>{data !== null && <CardDetail cardId={cardId} cardData={data} />}</>
}
export default CardDetailContainer
