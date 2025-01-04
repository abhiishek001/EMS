import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[350px] p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between  items-center'>
            <h3 className='bg-red-500 rounded text-sm px-3 py-1 '> {data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'> {data.title}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
        <div className='mt-5'>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm '>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
