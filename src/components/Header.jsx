import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-orange-300 to-blue-500 font-extrabold flex flex-row justify-around items-center p-8 m-8 rounded-lg hover:from-green-500 hover:to-yellow-300 border-4 ">
    <Link className='hover:italic text-bold text-blue-900 text-3xl'to ="/">
      <div>New Peoples App Cpy</div>
    </Link>
    <Link className='hover:italic text-bold text-blue-900 text-3xl'to ="/about">
      <div>about</div>
    </Link>
    <Link className='hover:italic text-bold text-blue-900 text-3xl'to ="/contact">
      <div>Contact Us</div>
    </Link>
  </nav>
  )
}

export default Header