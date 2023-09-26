import CardItem from './CardItem'
import React, { useState, useEffect } from 'react'

const CardItemContainer = ({ itemsArray, position }) => {
  const [data, setData] = useState(null)
  let items = []

  useEffect(() => {
    if (itemsArray !== null) {
      for (let index = 0; index < 20; index++) {
        if (itemsArray.data[position + index]) {
        items.push(
          itemsArray !== null && (
            <CardItem
              cardInfo={itemsArray.data[position + index]}
              key={itemsArray.data[position + index].id}
            ></CardItem>
          ),
        )
      }
      }
      setData(items)
    }
  }, [itemsArray, position])

  return <div className="card-item-container">{data}</div>
}

export default CardItemContainer
