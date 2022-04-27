import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { IAvogadro } from '@interfaces';

const HomePage = () => {

  const [listadoAvo, setListadoAvo] = useState<IAvogadro[]>([])

  const getData = async () => {
    try {
      const { data } = await (await window.fetch('/api/avo')).json()
      setListadoAvo(data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {listadoAvo.map(avogadro => (
        <div>
          {avogadro.id}
        </div>
      ))}
    </div>
  )
}

export default HomePage
