/* import React from 'react'
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
 */

import React, { useState, useEffect } from 'react';
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';

function getItemFromCollection(collectionName, itemId) {
  const [item, setItem] = useState(null);

  const db = getFirestore();
  const itemRef = doc(db, 'cards', itemId);

  useEffect(() => {
    const unsubscribe = onSnapshot(itemRef, (snapshot) => {
      try {
        if (snapshot.exists()) {
          setItem(snapshot.data());
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [collectionName, itemId]);

  return item;
}

export default getItemFromCollection;
