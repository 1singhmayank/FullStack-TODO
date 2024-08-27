import React from 'react';
import UpdateUser, { FetchUser } from '../lib/fetch';
import { DeleteTask } from '../lib/actions';

const UsersTable = async() => {
  const currentDate = new Date();
  const localeString = currentDate.toLocaleString();
  
  const usersData = await FetchUser();

  return (
    <div className="max-w-7xl rounded-lg mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-gray-800">TO-DO List</h2>
          <p className="mt-2 text-sm text-gray-600">
            Keep track of your tasks
          </p>
        </div>
        <a href="/addTask">
          <button className=" text-white px-6 py-3 rounded-lg shadow-lg text-sm p-2 bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300">
            Add Task
          </button>
        </a>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-4 px-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Title</th>
              <th className="py-4 px-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Description</th>
              <th className="py-4 px-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Date</th>
              <th className="py-4 px-6 text-right text-sm font-bold text-gray-700 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr key={user._id} className="border-t border-gray-300 hover:bg-gray-100 transition-colors duration-150">
                <td className="py-4 px-6 text-gray-800 font-medium">{user.title}</td>
                <td className="py-4 max-w-xs sm:max-w-sm  px-6 text-gray-700 break-words">
                  {user.description}
                </td>
                <td className="py-4 px-6 text-gray-700">{localeString}</td>
                <td className="py-4 px-6 text-right">
                  <div className="flex justify-end space-x-4">
                    <a href={`/updateTask/${user._id}`} className="text-white p-1 pl-2 pr-2 bg-blue-600 rounded-md  hover:text-white font-semibold transition-colors duration-150">
                      Edit
                    </a>
                    <form action={DeleteTask}>
                      <input type="hidden" name='id' value={user.id} />
                      <button type="submit" className="text-white p-1 pl-2 pr-2 bg-red-600 rounded-md  hover:text-white font-semibold transition-colors duration-150">
                        Delete
                      </button>
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
