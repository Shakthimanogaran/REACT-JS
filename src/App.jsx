import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataDisplay from'./components/Dashboard.jsx'
import Dashboard from './components/Dashboard.jsx'
import Counter from './components/counter.jsx'

function App() {
  const[name,setName]=useState("Shakhti")
  const[occ,setOcc]=useState("Developer")
  function nameChange(){
      setName("Sunil")
      console.log(name)
  }
  return(
    <>
      <Dashboard name={name} occ={occ} nameChange={nameChange}/>
      <Counter/>
    </>
    
    
  )
}

export default App
