import { generateInt } from "./randomNumberGenerator"

export function standarizeSingleCard(card) {
    let object = {
      name: card.name,
      race: card.race,
      archetype: card.archetype,
      price: card.card_prices[0].tcgplayer_price,
      desc: card.desc,
      type: card.type,
      atk: card.atk,
      def: card.def,
      level: card.level,
      scale: card.scale,
      linkval: card.linkval,
      linkmarkers: card.linkmarkers,
      pictureSource: null, 
      stock: generateInt(0, 350),
      passcode: card.id
  }
    return replaceUndefinedWithNull(object)
}

export function getCardImageToDownload(card) {
  return `https://images.ygoprodeck.com/images/cards/${card.id}.jpg`
}

function replaceUndefinedWithNull(inputObject) {
  for (let key in inputObject) {
    if (inputObject.hasOwnProperty(key) && inputObject[key] === undefined) {
      inputObject[key] = null;
    }
  }
  return inputObject;
}
