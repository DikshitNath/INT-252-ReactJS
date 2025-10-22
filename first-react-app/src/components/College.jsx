import React from 'react'

const College = (props) => {
  return (
    <div className='p-6'>
      <h1 className='Heading font-bold text-6xl text-orange-500 mb-3'>{props.college}</h1>
      <p className='font-light text-2xl text-gray-700'>{props.location}</p>
      <p className='font-light text-xl text-gray-500 mb-5'>{props.year}</p>

      <h2 className='text-2xl font-semibold mb-2'>Departments:</h2>
      <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-lg'>
        {props.departments.map((department, index) => (
          <li key={index} className='text-gray-700'>
            {department}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default College
