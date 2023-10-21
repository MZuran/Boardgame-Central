import React from 'react'
import { doc, getFirestore, updateDoc } from 'firebase/firestore';

async function updateItemFromCollection(itemId, updateObject) {
    const db = getFirestore()
    const itemref = doc(db, 'cards', itemId)

    await updateDoc(itemref, updateObject);
    console.log("updated item")

  return null
}

export default updateItemFromCollection
