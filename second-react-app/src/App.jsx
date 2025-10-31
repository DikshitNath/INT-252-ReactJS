import { useState } from 'react'
import './App.css'
import GreetingCard from './components/GreetingCard'
import Student from './components/Student'
import Contact from './components/Contact'

function App() {
  // const [click, setClick] = useState(false);

  // const handleClick = () => {
  //   console.log('clicked');
  //   setClick(!click);
  // };

  const data = {
    name: 'Dikshit',
    age: 25,
    email: 'dikshit@gmail.com',
    hobbies: ['Coding', 'Reading', 'Watching Movies']
  }

  return (
    <div className='w-[100vw] h-[100vh] gap-10 flex justify-center items-center'>
      {/* {click ? <GreetingCard greeting='Happy Birthday' name='Dikshit' /> :""} */}
      {/* <button className='bg-red-500 p-3 w-24 text-white rounded-lg' onClick={handleClick} >{click ? 'Clicked' : 'Click'}</button> */}
      {/* <Student 
        name={data.name} 
        age={data.age} 
        email={data.email} 
        hobbies={data.hobbies}
      /> */}

      <Contact name='Amit' email='amit123@gmail.com' phone='1234567890' image='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1176' />

    </div>
  );
}

export default App;
