import { useState } from 'react'
import './App.css'
import Todoinput from './components/Todoinput.jsx'

function App() {

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      <Todoinput />
    </div>
  )
}

export default App
