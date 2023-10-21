import useFetchForScraping from './useFetchForScraping';

function formatText(inputString) {
  return inputString.replace(/ /g, '_');
}

export function getCardImage(cardName) {
  let formattedCardName = formatText(cardName);
  let webScrapingSite = useFetchForScraping(
    'https://yugipedia.com/wiki/' + formattedCardName,
  );
  if (webScrapingSite[0] != null) {
    return webScrapingSite[0];
  } else {
    return "../../media/Back.png";
  }
}

export function getOnlyCardImage(cardName) {
  let formattedCardName = formatText(cardName);
  let webScrapingSite = useFetchForScraping(
    'https://yugipedia.com/wiki/' + formattedCardName,
  );
  if (webScrapingSite[0] != null) {
    return webScrapingSite[0];
  }
}
