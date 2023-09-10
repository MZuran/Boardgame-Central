import React from 'react'

function ItemListContainer({greeting}) {

  return (
    <>
    <h1 className='margin-5vw'>¡Bienvenidos a la tienda de Juegos de Mesa!</h1>
    <p className='margin-5vw'>{greeting}</p>
    </>
  )
}

export default ItemListContainer
