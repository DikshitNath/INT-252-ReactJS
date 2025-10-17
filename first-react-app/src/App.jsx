
import './App.css'
import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Course from './components/Course.jsx'
import Car from './components/Car.jsx'

function App() {

  // const firstName = 'Dikshit';
  // const lastName = 'Nath';

  // const now = new Date();
  // const hours = now.getHours();

  // const [count, setCount] = useState(0);

  const display = () => {
    return "Hello";
  }


  return (
    <div className='w-[100vw] h-[100vh] bg-gray-100 flex flex-col justify-center items-center'>
      {/* <p>Result of 10 * 5 is {10*5}</p>
      <p>{(hours < 12) ? 'Good Morning' : 'Good Evening'}</p>
      <input onChange={(e) => setCount(e.target.value.length)} type="text" placeholder='enter your name' className='bg-red-'/>
      
      <p>Length of name is {count}</p>
      <p>Today's date is {new Date().toDateString()}</p>
      <p>{firstName + ' ' + lastName}</p> */}
      
      <Car brand='Toyota' model='Corolla' year='2020'/>
      <h1>{display()}</h1>

    </div>
  )
}

export default App
