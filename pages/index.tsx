import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { IAvocado } from '@interfaces'
import Loader from 'components/Loader/Loader'
import CardAvocado from 'components/CardAvocado/CardAvocado'

const HomePage = () => {
  const [listadoAvo, setListadoAvo] = useState<IAvocado[]>([])
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    try {
      setLoading(true)
      const { data } = await (await window.fetch('/api/avo')).json()
      setListadoAvo(data)
    } catch (error) {
      console.error('TYPE ERROR: ' + error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {listadoAvo.length === 0 ?
        <Loader />
        :
        listadoAvo.map((avocado) => (
          <CardAvocado avocado={avocado} />
        ))}
    </div>
  )
}

export default HomePage
