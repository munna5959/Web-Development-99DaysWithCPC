import React, { useContext } from 'react'
import InsideNav from '../InsideNav/InsideNav'
import { CountContext } from '../../App'

const Navbar = () => {
  const useState = useContext(CountContext);
  return (
    <div>
        <InsideNav></InsideNav>
        <button>Nav Count is {useState} </button>
    </div>
  )
}

export default Navbar