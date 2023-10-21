import React from 'react'
//import { doc, getDoc, firestore } from 'firebase/firestore'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

function insertDataInCollection(thingsToBeAddedArray, collectionName) {
  const db = getFirestore()
  const collectionRef = collection(db, collectionName)

  for (let item of thingsToBeAddedArray) {
    addDoc(collectionRef, item)
      .then((res) => console.log('data inserted', res.id))
      .catch((err) => console.log(err))
  }

  return null
}

export default insertDataInCollection
