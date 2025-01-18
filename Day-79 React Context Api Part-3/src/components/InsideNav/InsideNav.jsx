import React, { useContext } from 'react'
import Newnav from '../Newnav/Newnav'
import { CountContext } from '../../App'

const InsideNav = () => {
  const useState = useContext(CountContext);
  return (
    <div>
        <Newnav></Newnav>
       <button>Inside Nav is {useState}</button>
    </div>
  )
}

export default InsideNav