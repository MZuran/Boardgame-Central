import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import CardItem from './CardItem';

import useFetch from '../Hooks/useFetch'

function ItemListContainer({greeting}) {
  const [items] = useFetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?&sort=atk")
  
 /*  useEffect(() => {
    if (items != null) {console.log(items.data[0].desc)}
  }) */

  return (
    <>
    <Container>
            <Row>
                {
                    items !== null &&
                    <CardItem cardInfo={items.data[4]}></CardItem>
                    //items !== null &&
                    //<ItemList items={items} />
                }
            </Row>
        </Container>
    </>
  )
}

export default ItemListContainer
