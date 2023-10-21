import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { query } from 'firebase/firestore'
import { where } from 'firebase/firestore'
import { doc } from 'firebase/firestore'
import { getDoc } from 'firebase/firestore'
import { updateDoc } from 'firebase/firestore'

function getLast12AndGetFirst8(inputString) {
  if (typeof inputString !== 'string') {
    throw new Error('Input must be a string')
  }

  const last12Characters = inputString.slice(-12)
  const first8Characters = last12Characters.slice(0, 8)

  return first8Characters
}

function extractId(url) {
  // Get the last part of the URL after the last "/"
  const lastPart = url.substring(url.lastIndexOf('/') + 1);

  // Extract numbers between the last "/" and ".jpg"
  const id = lastPart.match(/\d+/);

  // Return the extracted ID
  return id ? id[0] : null;
}

export function addPicturesToDatabase(url) {
  let passcode = parseInt(extractId(url))

  const db = getFirestore()
  const cardCollection = collection(db, 'cards')

  const q = query(cardCollection, where('passcode', '==', passcode))
  getDocs(q).then((snapshot) => {
    let cardId = snapshot.docs[0].id
    console.log("Fetched Card")

    updatePicture(url, cardId)
    .catch(err => console.log(err)

    )
  })
}

async function updatePicture(url, cardId) {
    const db = getFirestore()
    const itemref = doc(db, "cards", cardId)

    await updateDoc(itemref, {
        "pictureSource": url
    })

    console.log("Updated Card")
}