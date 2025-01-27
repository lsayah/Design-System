import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button'
import TicketsList from './Components/TicketsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Button />
     <TicketsList />
    </div>
  )
}

export default App
