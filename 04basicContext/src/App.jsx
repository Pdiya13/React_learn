import { useContext } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'
import userContext from './Context/userContext'

function App() {
  return (
    <UserContextProvider>
        <h1>learn context</h1>
        <Login />
        <Profile />  
    </UserContextProvider>
  )
}

export default App
