import React from 'react'

const TaskListNumbers = ({data}) => {
    return (
    <div className="flex mt-10 justify-between gap-5 screen">
        <div className="rounded-xl w-[45%] py-5 px-10 bg-red-400">
            <h2 className="text-3xl font-semibold bg-red-400">{data.taskCount.newTask}</h2>
            <h3 className="text-xl font-medium bg-red-400">New task</h3>
        </div>
        <div className="rounded-xl w-[45%] py-5 px-10 bg-blue-400">
            <h2 className="text-3xl font-semibold bg-blue-400">{data.taskCount.completed}</h2>
            <h3 className="text-xl font-medium bg-blue-400">Completed task</h3>
        </div>
        <div className="rounded-xl w-[45%] py-5 px-10 bg-yellow-300">
            <h2 className="text-3xl font-semibold bg-yellow-300">{data.taskCount.failed}</h2>
            <h3 className="text-xl font-medium bg-yellow-300">failed task</h3>
        </div>
        <div className="rounded-xl w-[45%] py-5 px-10 bg-green-400">
            <h2 className="text-3xl font-semibold bg-green-400">{data.taskCount.active}</h2>
            <h3 className="text-xl font-medium bg-green-400">Active task</h3>
        </div>
    </div>
    
    )
}

export default TaskListNumbers
