import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import CardItem from './Items/CardItem'
import CardDetail from './Details/CardDetail'

import useFetch from '../Hooks/useFetch'

function ItemListContainer({ greeting }) {
  const [items] = useFetch(
    'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Odd-Eyes Pendulum Dragon',
  )

  useEffect(() => {
    if (items != null) {
      console.log(items)
    }
  })

  return (
    <>
      <Container>
        <Row>
          {items !== null && <CardDetail cardInfo={items.data[0]}></CardDetail>}

          {items !== null && <CardItem cardInfo={items.data[0]}></CardItem>}
        </Row>
      </Container>
    </>
  )
}

export default ItemListContainer
