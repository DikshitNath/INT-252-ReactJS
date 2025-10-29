import { useState } from 'react'
import './App.css'
import GreetingCard from './components/GreetingCard'

function App() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    console.log('clicked');
    setClick(!click);
  };

  return (
    <div className='w-[100vw] h-[100vh] gap-10 flex flex-col justify-center items-center'>
      {/* {click ? <GreetingCard greeting='Happy Birthday' name='Dikshit' /> :""} */}
      <button className='bg-red-500 p-3 w-24 text-white rounded-lg' onClick={handleClick} >{click ? 'Clicked' : 'Click'}</button>
    </div>
  );
}

export default App;
