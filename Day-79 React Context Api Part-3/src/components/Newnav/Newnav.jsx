import React, { useContext } from 'react';
import { CountContext } from '../../App';

const Newnav = () => {
  const [count, setCount] = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Newnav is {count}</button>
    </div>
  );
};

export default Newnav;
