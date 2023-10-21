import { useState } from 'react'
import { useEffect } from 'react'
import getItemFromCollection from './getItemFromCollection'
import updateItemFromCollection from './updateItemFromCollection'

function reduceItemStock(itemId) {
    const collectionData = getItemFromCollection('cards', itemId)

    useEffect(() => {
        updateItemFromCollection(itemId, { stock: item.stock - 1 })
    }, [collectionData])
}

export default reduceItemStock
