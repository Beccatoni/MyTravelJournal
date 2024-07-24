import React from 'react'
import globe from '../assets/globe2.png'

const Nav = () => {
  return (
    <div className="bg-[#F55A5A] w-full h-24 flex items-center justify-center gap-2">
        <img src={globe} alt=""  />
        <p className='text-white font-bold text-3xl'>my travel journal.</p>
    </div>
  )
}

export default Nav