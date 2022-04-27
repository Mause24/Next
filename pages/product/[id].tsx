import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { IAvogadro } from '@interfaces';

const ProductPage = () => {

  const { query } = useRouter()
  const [avogadro, setAvogadro] = useState<IAvogadro>({} as any)

  const getData = async () => {
    if (query.id !== null) {
      console.log(query.id);
      const avo = await (await window.fetch(`/api/avo/${query.id}`)).json()
      if (avo) {
        setAvogadro(avo)
      }
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <section>
      <h1>Página producto: {avogadro.name}</h1>
      <p>
        id:{avogadro.id}<br />
        name:{avogadro.name}<br />
        image:{avogadro.image}<br />
        price:${avogadro.price}<br />
      </p>
    </section>
  )
}

export default ProductPage
