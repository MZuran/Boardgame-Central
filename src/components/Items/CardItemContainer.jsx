import CardItem from './CardItem'
import React, { useState, useEffect } from 'react'

const CardItemContainer = ({ itemsArray, position }) => {
  const [data, setData] = useState(null)
  console.log('Items Array', itemsArray)

  useEffect(() => {
    let items = []
    if (itemsArray !== null) {
      for (let index = 0; index < 20; index++) {
        if (itemsArray[position + index]) {
          items.push(
            itemsArray !== null && (
              <CardItem
                cardData={itemsArray[position + index]}
                key={itemsArray[position + index].id}
              ></CardItem>
            ),
          )
        }
      }
      setData(items)
      //console.log('items in carditemcontainer', items)
    }
  }, [itemsArray, position])

  return <>{data}</>
}

export default CardItemContainer
