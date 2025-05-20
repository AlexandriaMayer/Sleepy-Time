import { useState } from 'react'
import './App.css'
import { Temporal } from 'temporal-polyfill'

function App() {
  const [count, setCount] = useState(0)
  console.log(Temporal.Now.zonedDateTimeISO().toString())
  return (
    <>
     
    </>
  )
}

export default App
