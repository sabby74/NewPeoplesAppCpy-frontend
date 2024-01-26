import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Show = () => {
  const people= useLoaderData()
  return (
    <div className="flex flex-column flex-wrap justify-center items-center bg-green-900 rounded-lg  m-36 p-12   ">
      <h1 className='text-white text-3xl'>{people.name}</h1>
      <img className="rounded-lg m-4 " src={people.image} alt={people.name} />
      <h3 className='text-white text-3xl'>{people.title}</h3>
      </div>
  )
}

export default Show