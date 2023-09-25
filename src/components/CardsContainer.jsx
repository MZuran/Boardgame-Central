import React, { useState, useEffect } from 'react'
import { Button, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import CardItem from './Items/CardItem'
import CardDetail from './Details/CardDetail'
import CardItemContainer from './Items/ItemListContainer'

import useFetch from '../Hooks/useFetch'

function ItemListContainer({ greeting }) {
  const [items] = useFetch(
    'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  )

  const [position, setPosition] = useState(0);

  useEffect(() => {
    console.log(position)
  }, [position])

  return (
    <>
      <Container className='flex-column'>
        <Row>
          {items !== null && <CardDetail cardInfo={items.data[position]}></CardDetail>}

          <CardItemContainer position={position} itemsArray={items}></CardItemContainer>
        </Row>
        <div className='navigation-buttons-container'>
        <Button onClick={() => {if (position >= 20) {setPosition(position - 20)}}}>Prev</Button>
        <Button onClick={() => setPosition(position + 20)}>Next</Button>

        </div>
      </Container>
    </>
  )
}

export default ItemListContainer
