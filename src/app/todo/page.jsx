import React from 'react';
import UpdateUser, { FetchUser } from '../lib/fetch'
import { DeleteTask } from '../lib/actions';

const UsersTable = async() => {
  const currentDate = new Date();
  const localeString = currentDate.toLocaleString();
  
  const usersData = await FetchUser()

  return (
    <div className="max-w-7xl rounded-md mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-gray-800">TO-DO List</h2>
          <p className="mt-2 text-sm text-gray-600">
To keep the track of work          </p>
        </div>
        <a href="/addTask">
        <button className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Add Task
        </button>
        </a>
      </div>
      <div className="overflow-x-auto shadow-sm rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Title</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Description</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="py-3 px-6 text-right text-sm font-semibold text-gray-700"></th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr key={user._id} className="border-t border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                <td className="py-4 font-semibold px-6 text-gray-700">{user.title}</td>
                <td className="py-4 max-w-xs md:max-w-sm lg:max-w-md font-semibold px-6 text-gray-700 break-words">
  {user.description}
</td>
                <td className="py-4 font-semibold px-6 text-gray-700">{localeString}</td>
                <td className="py-4 font-semibold px-6 text-right">
                  <div className='flex'>
                  <a href={`/updateTast/${user._id}`}>               

                       <button className="text-blue-600 hover:text-blue-900 font-semibold">Edit</button>
                  </a>
<form action={DeleteTask}>
  <input type="hidden" name='id' value={user.id} />
                  <button className="text-red-500 hover:text-red-500 font-semibold ml-2">Del</button>
                  </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
