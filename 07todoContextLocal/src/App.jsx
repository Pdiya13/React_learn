import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContextprovider } from './contexts/TodoContext'
import Home from './components/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TodoContextprovider>
      <h1 className='text-3xl text-center mt-10 font-bold'>Manage Your Todos</h1>
      <Home />
    </TodoContextprovider>
  )
}

export default App
