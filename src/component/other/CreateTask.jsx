import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const newTask = {
            title,
            date,
            description,
            category,
            active: false,
            newTask: true,
            completed: false,
            failed: false,
        };

        // Update user data with the new task for the assigned employee
        const updatedUserData = [...userData];

        updatedUserData.forEach((employee) => {
            if (employee.firstName === assignedTo) {
                employee.tasks.push(newTask);
                employee.taskCount.newTask += 1;
            }
        });

        setUserData(updatedUserData);
        console.log('Updated user data:', updatedUserData);

        // Store updated user data to localStorage
        localStorage.setItem('employees', JSON.stringify(updatedUserData));

        // Reset form fields after submission
        setCategory('');
        setAssignedTo('');
        setDate('');
        setDescription('');
        setTitle('');
    };

    return (
        <div className='p-5 bg-[#1c1c1c] rounded mt-7'>
            <form
                onSubmit={submitHandler}
                className='flex w-full flex-wrap items-start justify-between'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500 mb-4'
                            type='text'
                            placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500 mb-4'
                            type='date'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input
                            value={assignedTo}
                            onChange={(e) => setAssignedTo(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500 mb-4'
                            type='text'
                            placeholder='Employee name'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500 mb-4'
                            type='text'
                            placeholder='Design, Development'
                        />
                    </div>
                </div>

                <div className='w-1/2 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='text-sm w-full h-44 py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-500 mb-4'
                        placeholder='Describe the task in detail'
                    ></textarea>
                    <button
                        className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'
                        type='submit'
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
