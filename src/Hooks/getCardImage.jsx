import React from 'react'
import useFetchForScraping from './useFetchForScraping'

function formatText(inputString) {
  return inputString.replace(/ /g, '_')
}

const getCardImage = (cardName) => {
  let formattedCardName = formatText(cardName)
  let webScrapingSite = useFetchForScraping(
    'https://yugipedia.com/wiki/' + formattedCardName,
  )
  //console.log(webScrapingSite[0])
  if (webScrapingSite[0] != null) {
    return webScrapingSite[0]
  } else {
    return "../../media/Back.png"
  }

}

export default getCardImage
