import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Newnav from './components/Newnav/Newnav'

export const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountContext.Provider value={[count, setCount]}>
      <Navbar></Navbar>
      <Newnav></Newnav>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </CountContext.Provider>
        
    </>
  )
}

export default App
