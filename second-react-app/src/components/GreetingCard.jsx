import React from 'react'

const GreetingCard = (props) => {
  return (
    <div className='w-[25%] h-[50%] rounded-lg gap-5 p-5 flex flex-col justify-center items-center card'>
        <div className='bg-zinc-300 opacity-80 shadow-lg w-[80%] h-[80%] rounded-lg flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-semibold'>{props.greeting}</h1>
            <p className='text-xl'>{props.name}</p>
        </div>    
    </div>
  )
}

export default GreetingCard