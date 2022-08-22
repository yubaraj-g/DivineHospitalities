import React from 'react'
import { Link } from 'react-router-dom'

function LandingTxtBtn1() {
  return (
    <div className='txtBtn1'>
      <h1>Divine Dumplings</h1>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </span>
      <Link to="/menu">Check Full Menu</Link>
    </div>
  )
}

export default LandingTxtBtn1
