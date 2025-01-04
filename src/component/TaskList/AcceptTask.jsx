import React from 'react'

const AcceptTask = ({data}) => {
    
    
    return (
        <div className='flex-shrink-0 h-full w-[350px]  p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between  items-center'>
                <h3 className='bg-red-500 rounded text-sm px-3 py-1 '>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title} </h2>
            <p className='text-sm mt-2'>{data.description}</p>
            <div className='flex justify-between mt-5 '>
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm'>Mark as completed</button>
                <button className='bg-red-500 py-3 hover:bg-red-600 px-5 rounded text-sm'>Mark as Failed </button>
            </div>
        </div>
       
    )
}

export default AcceptTask
