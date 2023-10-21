import React, { useState, useEffect } from 'react'
import { Button, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import CardItemContainer from '../components/Items/CardItemContainer'
import { useParams } from 'react-router-dom'
import getDataFromCollection from '../Hooks/firebase/getDataFromCollection'

function ItemListContainer() {
  const { queryType, queryParameter } = useParams()
  const [position, setPosition] = useState(0)
  const [items, setItems] = useState(null)

  const collectionData = getDataFromCollection("cards", queryParameter, queryType)

  useEffect(() => {
    setItems(collectionData)
  }, [queryType, queryParameter, collectionData])

  useEffect(() => {
    setPosition(0)
  }, [queryType, queryParameter])

  function positionForwards() {
    if (items.data.length > position + 20) {
      setPosition(position + 20)
    }
  }

  function positionBackwards() {
    if (position >= 20) {
      setPosition(position - 20)
    }
  }

  return (
    <>
      {items && (
        <Container className="flex-column">
          <Row>
            <CardItemContainer position={position} itemsArray={items} />
          </Row>
          <div className="navigation-buttons-container">
            <Button onClick={() => { positionBackwards() }} > Prev </Button>
            <Button onClick={() => { positionForwards() }} > Next </Button>
          </div>
        </Container>
      )}
    </>
  )
}

export default ItemListContainer
