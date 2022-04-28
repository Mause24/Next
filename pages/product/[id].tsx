import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { IAvocado } from '@interfaces'
import Loader from 'components/Loader/Loader'

const ProductPage = () => {
  const {
    query: { id },
  } = useRouter()
  const [avocado, setAvocado] = useState<IAvocado>({} as any)
  const [loader, setLoader] = useState(false)

  const getData = async () => {
    try {
      setLoader(true)
      const avo = await (await window.fetch(`/api/avo/${id}`)).json()
      if (avo) {
        setAvocado(avo)
      }
    } catch (error) {
      console.error('TYPE ERROR: ' + error)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    if (id) {
      getData()
    }
  }, [id])

  return (
    <section>
      {loader ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </section>
  )
}

export default ProductPage
