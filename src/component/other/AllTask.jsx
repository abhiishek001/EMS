import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  // console.log("userData:", userData, typeof userData, Array.isArray(userData));

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded">
      <div className="bg-red-600 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>

      <div>
        {
          userData.map((e, idx) => (
            <div key={idx} className="bg-black border-2 border-emerald-400 mb-2 py-2 px-4 flex justify-between rounded">
              <h2 className="text-lg font-medium w-1/5 text-white">{e.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-400">{e.taskCount.newTask}</h3>
              <h5 className="text-lg font-medium w-1/5 text-green-500">{e.taskCount.active}</h5>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">{e.taskCount.completed}</h5>
              <h5 className="text-lg font-medium w-1/5 text-red-500">{e.taskCount.failed}</h5>
            
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default AllTask;
