import React from 'react'
import './divineHome.css'
import { Link } from 'react-router-dom'

function DivineHome() {
  return (
    <div className='homeCanvas w-full'>
      <div className='circle'></div>

      <div className='contactLink flex flex-col'>
        <div className='tiny1'></div>
        <Link to="/coming-soon">Contact</Link>
        <div className='tiny2'></div>
      </div>

      <div className='animatedHeading1'>
        <span>DIVINE</span>
      </div>
      <div className='animatedHeading2'>
        <span>HOSPITALITIES</span>
      </div>
    </div>
  )
}

export default DivineHome
