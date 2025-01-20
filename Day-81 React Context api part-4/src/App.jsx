import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Context1Provider } from './context/Context1';

function App() {
  return (
    <div>
      <Context1Provider>
        <Navbar></Navbar>
        <button>Count - </button>
      </Context1Provider>
    </div>
  )
}

export default App;
