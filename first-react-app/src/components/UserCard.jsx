import React from 'react'
import { useState } from 'react'

const UserCard = (props) => {
    const [count, setCount] = useState(0);
  return (
    <div className='bg-zinc-300 w-[25%] h-[50%] rounded-lg gap-5 p-5 flex flex-col justify-between items-center'>
        <img src='https://images.unsplash.com/photo-1760981253092-5d1a9f04eef6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169' alt='user' className='w-[100%] h-[80%] rounded-lg' />
        <div className='h-[20%] w-[100%] flex justify-between'>
            <div>
                <h1 className='text-2xl font-semibold '>{props.name}</h1>
                <p >{props.email}</p>
                <p >{props.city}</p>
            </div>
            <div className='flex flex-col justify-between'>
                <p className='font-lg'>Likes: {count}</p>
                <button onClick={() => setCount(count + 1)} className='bg-red-500 text-white px-4 py-1 rounded-lg'>
                    Like
                </button>  
            </div>
            
        </div>

    </div>
  )
}

export default UserCard
