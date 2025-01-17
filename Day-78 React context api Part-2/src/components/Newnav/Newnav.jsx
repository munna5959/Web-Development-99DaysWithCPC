import React, { useContext } from 'react'
import { CountContext } from '../../App';

const Newnav = () => {
  const StateContext = useContext(CountContext);
  return (
    <div>
        <button>Newnav is {StateContext}</button>
    </div>
  )
}

export default Newnav