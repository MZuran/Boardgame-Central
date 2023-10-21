import getItemFromCollection from '../../Hooks/firebase/getItemFromCollection'
import React, { useEffect, useState } from 'react'
import { useCartVariable } from '../../context/cartContext'
import { usePurchaseCostVariable } from '../../context/costContext'
import { Link } from 'react-router-dom'

function CartItem({ itemId }) {
  const [card, setCard] = useState(null)
  const { popCart } = useCartVariable()
  const { addToPurchaseCost } = usePurchaseCostVariable()

  const collectionData = getItemFromCollection("cards", itemId)

  useEffect(() => {
    setCard(collectionData)
    }, [collectionData])

  return (
    <>
      {card && (
        <div className="flex-row">
          <div
            className="card mb-3"
            style={{
              maxWidth: '540px',
              maxHeight: '300px',
              marginTop: '0.5rem',
            }}
          >
            <div className="row no-gutters">
              <div className="col-md-4">
                <Link to={`/card/${itemId}`}>
                  <img
                    src={card.pictureSource}
                    style={{ height: '200px', margin: '0.5rem' }}
                  />
                </Link>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {card.name}
                  </h5>
                  <h6 className="card-title">{card.price}$</h6>
                  <p
                    className="card-text"
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      WebkitLineClamp: 3,
                    }}
                  >
                    {card.desc}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Copies in stock: {card.stock}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="../../media/trash-bin.png"
            alt="trash"
            style={{ height: '40px', marginLeft: '1vw', cursor: 'pointer' }}
            onClick={() => {
              popCart(itemId)
              addToPurchaseCost(-card.price)
            }}
          />
        </div>
      )}
    </>
  )
}

export default CartItem
