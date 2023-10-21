import React, { useState, useEffect } from 'react'
import CardDetail from './CardDetail'
import { useParams } from 'react-router-dom'
import { getFirestore, getDoc, doc } from 'firebase/firestore'

const CardDetailContainer = () => {
  const [data, setdata] = useState(null)
  const { cardId } = useParams()
  const db = getFirestore()
  const itemref = doc(db, 'cards', cardId)

  useState(() => {
    getDoc(itemref)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setdata(snapshot.data())
        }
      })
      .catch((err) => console.log(err))
  }, [])

  return <>{data !== null && <CardDetail cardId={cardId} cardData={data} />}</>
}
export default CardDetailContainer
