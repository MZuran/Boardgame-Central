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

  const imageUrls = [
    'https://i.postimg.cc/W1zgFn0d/10493654.jpg',
    'https://i.postimg.cc/yYtYjXwg/11738489.jpg',
    'https://i.postimg.cc/76k5VMJM/14146794.jpg',
    'https://i.postimg.cc/3rZvt6By/15808381.jpg',
    'https://i.postimg.cc/854zb8SN/16020923.jpg',
    'https://i.postimg.cc/gjG6YqYk/22933016.jpg',
    'https://i.postimg.cc/m2Dt8rkq/24882256.jpg',
    'https://i.postimg.cc/htm45QBC/37061511.jpg',
    'https://i.postimg.cc/YSc0rfRK/41306080.jpg',
    'https://i.postimg.cc/WbbJCnW5/42429678.jpg',
    'https://i.postimg.cc/Dw4m3YqP/55762976.jpg',
    'https://i.postimg.cc/Bvx6XL78/59054773.jpg',
    'https://i.postimg.cc/GmfYkyjq/59332125.jpg',
    'https://i.postimg.cc/ZR4q3bXw/61399402.jpg',
    'https://i.postimg.cc/HW3rwMYX/62111090.jpg',
    'https://i.postimg.cc/CLPfgq9S/66192538.jpg',
    'https://i.postimg.cc/hvMQhzj8/69381150.jpg',
    'https://i.postimg.cc/L8Jg6sMf/74567889.jpg',
    'https://i.postimg.cc/Bv1FNnYs/77421977.jpg',
    'https://i.postimg.cc/zvDVmzjy/78751195.jpg',
    'https://i.postimg.cc/CLQdtVfK/82257671.jpg',
    'https://i.postimg.cc/B6TK9wfV/85327820.jpg',
    'https://i.postimg.cc/65ypC11x/86449372.jpg',
    'https://i.postimg.cc/yxfWsMQv/88413677.jpg',
    'https://i.postimg.cc/k58VKhGg/97383507.jpg',
    'https://i.postimg.cc/vmd8F88G/98506199.jpg',
  ]

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
