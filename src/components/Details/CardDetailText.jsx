import React from 'react'
import { Link } from 'react-router-dom'

function CardDetailText({ cardData }) {
  return (
    <div>
      <p>{cardData.name}</p>

      <p>
        {cardData.atk !== undefined && `ATK/${cardData.atk} `}
        {cardData.def !== undefined &&
          cardData.def !== null &&
          `DEF/${cardData.def} `}
      </p>

      <p>
        {cardData.level && `Level/Rank ${cardData.level} `}
        {cardData.linkval && `Link-${cardData.linkval} `}
        {/* {cardData.attribute && `${cardData.attribute} `} */}
        {cardData.race} {cardData.type}
      </p>

      {cardData.type == 'Link Monster' && (
        <p>
          Link Markers:
          {cardData.linkmarkers.includes('Top') && '🢁'}
          {cardData.linkmarkers.includes('Top-Right') && '🢅'}
          {cardData.linkmarkers.includes('Top-Left') && '🢄'}
          {cardData.linkmarkers.includes('Left') && '🢀'}
          {cardData.linkmarkers.includes('Right') && '🢂'}
          {cardData.linkmarkers.includes('Bottom') && '🢃'}
          {cardData.linkmarkers.includes('Bottom-Right') && '🢆'}
          {cardData.linkmarkers.includes('Bottom-Left') && '🢇'}
          <span className="info-text"> <i>arrows not visible in some images</i> </span>
        </p>
      )}

      {cardData.scale && <p>Scale: {cardData.scale}</p>}
      <p>{cardData.desc}</p>
      {cardData.archetype && (
        <p>
          Archetype:{' '}
          <Link to={'/search/archetype/' + cardData.archetype}
            style={{
              textDecoration: 'underline',
              textDecorationColor: 'gray',
              textDecorationStyle: 'double',
              color: "black"
            }} >
            {cardData.archetype}
          </Link>
        </p>
      )}
      <p> Price: {cardData.price}$ <i> <span className="info-text">(tcgplayer.com)</span> </i> </p>
      <p> Stock: {cardData.stock} </p>
    </div>
  )
}

export default CardDetailText
