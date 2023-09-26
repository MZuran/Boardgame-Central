import getCardImage from '../../Hooks/getCardImage'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardDetail = (data) => {
  const cardData = data.cardData
  let price = cardData.card_prices[0].tcgplayer_price
  const cardName = cardData.name
  const imgSrc = getCardImage(cardName)

  if (price == 0) {
    price = 'not available'
  } else {
    price = price + '$'
  }

  return (
    <div className="card-detail">
      <div>
        <img className="image-container" src={imgSrc} alt={cardData.name} />
      </div>

      <div>
        <div>
          <p>{cardData.name}</p>

          <p>
            {cardData.atk && `ATK/${cardData.atk} `}
            {cardData.def && `DEF/${cardData.def} `}
          </p>

          <p>
            {cardData.level && `Level/Rank ${cardData.level} `}
            {cardData.linkval && `Link-${cardData.linkval} `}
            {cardData.attribute && `${cardData.attribute} `}
            {cardData.race} {cardData.type}
          </p>

          {cardData.scale && <p>Scale: {cardData.scale}</p>}
          <p>{cardData.desc}</p>
          <p>
            Price: {price} <i>(tcgplayer.com)</i>
          </p>
        </div>
        <div className='navigation-buttons-container'>
        <Button>Related Cards</Button>
        <Link to={`/`}><Button>Go Back</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default CardDetail
