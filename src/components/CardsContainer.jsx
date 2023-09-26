import React, { useState, useEffect } from 'react'
import { Button, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import CardItemContainer from './Items/ItemListContainer'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'

function ItemListContainer() {
  const { cardType } = useParams()
  //<CardItemContainer position={position} itemsArray={items}></CardItemContainer>
  const [data, setData] = useState(null)
  const [position, setPosition] = useState(0)

  let fetchAddress
  if (cardType !== undefined) {
    fetchAddress = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?' + cardType
  } else {
    fetchAddress = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
  }

  let [items] = useFetch(fetchAddress, [fetchAddress])

  useEffect(() => {
    if (cardType !== undefined) {
      fetchAddress = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?' + cardType
    } else {
      fetchAddress = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
    }

    setData(<CardItemContainer position={position} itemsArray={items} />)
  }, [cardType, items])

  return (
    <>
      <Container className="flex-column">
        <Row>
          {/* <CardItemContainer position={position} itemsArray={items}></CardItemContainer> */}
          {data}
        </Row>
        <div className="navigation-buttons-container">
          <Button
            onClick={() => {
              if (position >= 20) {
                setPosition(position - 20)
              }
            }}
          >
            Prev
          </Button>
          <Button onClick={() => setPosition(position + 20)}>Next</Button>
        </div>
      </Container>
    </>
  )
}

export default ItemListContainer
