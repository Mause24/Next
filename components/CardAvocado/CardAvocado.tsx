import React from 'react'
import { IAvocado } from '@interfaces';

interface PropsCardAvocado{
    avocado:IAvocado
}

const CardAvocado = ({avocado}:PropsCardAvocado) => {
  return (
    <div>
        <h1>{avocado.name}</h1>
          <p>
            <img src={`${avocado.image}`} alt="defaultAvocado" />
            <br />
            id: {avocado.id}
            <br />
            name: {avocado.name}
            <br />
            price: ${avocado.price}
            <br />
          </p>
    </div>
  )
}

export default CardAvocado