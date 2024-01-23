import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex items-center justify-center bg-green-900 h-24 m-3 p-3 rounded-lg text-white text-2xl font-bold '>
    <Link to="/">
      <div>New Peoples App Cpy</div>
    </Link>
  </nav>
  )
}

export default Header