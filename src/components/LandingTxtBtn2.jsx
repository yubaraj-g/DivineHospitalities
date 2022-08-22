import React from 'react'
import { Link } from 'react-router-dom'

function LandingTxtBtn2() {
  return (
    <div className='txtBtn2'>
      <h1>Art Of Cooking</h1>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </span>
      <Link to="/menu">Check Full Menu</Link>
    </div>
  )
}

export default LandingTxtBtn2
