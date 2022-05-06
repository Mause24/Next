import React from 'react'
import { IAvocado } from '@interfaces';
import styles from './CardAvocado.module.css'

interface PropsCardAvocado{
    avocado:IAvocado
}

const CardAvocado = ({avocado}:PropsCardAvocado) => {
  return (
    <div className={styles.CardAvo}>
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