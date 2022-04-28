import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { IAvocado } from '@interfaces'

const HomePage = () => {
  const [listadoAvo, setListadoAvo] = useState<IAvocado[]>([])

  const getData = async () => {
    try {
      const { data } = await (await window.fetch('/api/avo')).json()
      setListadoAvo(data)
    } catch (error) {
      console.error('TYPE ERROR: ' + error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {listadoAvo.map((avocado) => (
        <div>{avocado.id}</div>
      ))}
    </div>
  )
}

export default HomePage
