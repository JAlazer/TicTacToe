import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './components/Board.jsx'

function App() {
  return (
    <>
      <img src={reactLogo} alt="React logo" className='logo'/>
      <h1>Tic Tac Toes!</h1>
      <Board />
    </>
  )
}

export default App
