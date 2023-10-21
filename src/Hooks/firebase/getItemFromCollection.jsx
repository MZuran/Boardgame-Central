import React from 'react'
//import { getFirestore, collection, getDocs, query, where, } from 'firebase/firestore'
import { getFirestore, getDoc, doc } from 'firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'

function getItemFromCollection(collectionName, itemId) {
  const [item, setItem] = useState(null)

  const db = getFirestore()
  const itemref = doc(db, 'cards', itemId)

  useEffect(() => {
    getDoc(itemref)
      .then((snapshot) => {
        if (snapshot.exists()) {
            setItem(snapshot.data())
        }
      })
      .catch((err) => console.log(err))
  }, [collectionName, itemId])

  return item
}

export default getItemFromCollection
