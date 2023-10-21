import React, { useState, useEffect } from 'react'

const useFetchForScraping = (url) => {
  const [data, setData] = useState(null)

  const getData = () => {
    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        // Parse the HTML response using DOMParser
        const parser = new DOMParser()
        const doc = parser.parseFromString(html, 'text/html')
        let src

        const imageDiv = doc.querySelector('.image')

        if (imageDiv) {
          // Use querySelector to select the <img> element within the div
          const imgElement = imageDiv.querySelector('img')

          if (imgElement) {
            // Access the src attribute of the <img> element
            src = imgElement.getAttribute('src')

            // Now, 'src' contains the value of the src attribute of the <img> element
            //console.log(src)
          } else {
            console.log(
              "No <img> element found inside the div with the 'image' class.",
            )
          }
        } else {
          console.log("No div with the 'image' class found.")
        }

        // Now, 'doc' contains the parsed HTML document
        setData(src)
      })
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    getData()
  }, [url])
  return [data]
}

export default useFetchForScraping
