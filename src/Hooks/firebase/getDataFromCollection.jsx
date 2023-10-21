import React from 'react'
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'

function getDataFromCollection(collectionName, queryParameter, queryType) {
  const [items, setItems] = useState(null)
  useEffect(() => {
    const db = getFirestore()
    const completeCardCollection = collection(db, collectionName)
    let q

    if (queryParameter && queryType) {
      q = query(completeCardCollection, where(queryType, '==', queryParameter))
    } else {
      q = completeCardCollection
    }

    getDocs(q).then((snapshot) => {
      const allData = snapshot.docs.map((card) => ({
        id: card.id,
        ...card.data(),
      }))
      //console.log('allData', allData)
      setItems(allData)
    })
  }, [collectionName, queryParameter, queryType])
  return items
}

export default getDataFromCollection
