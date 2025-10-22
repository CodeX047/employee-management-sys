import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] text-white mt-12 p-8 rounded-2xl border border-gray-800 shadow-lg">
      <h2 className="text-2xl font-semibold mb-8 text-center">All Employees</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-800">
          <thead className="bg-[#2a2a2a] text-gray-300 text-sm uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4 border border-gray-800">ID</th>
              <th className="py-3 px-4 border border-gray-800">Name</th>
              <th className="py-3 px-4 border border-gray-800">Email</th>
              <th className="py-3 px-4 border border-gray-800 text-center">
                Total Tasks
              </th>
              <th className="py-3 px-4 border border-gray-800 text-center">
                New
              </th>
              <th className="py-3 px-4 border border-gray-800 text-center">
                Completed
              </th>
              <th className="py-3 px-4 border border-gray-800 text-center">
                Failed
              </th>
              <th className="py-3 px-4 border border-gray-800 text-center">
                In Progress
              </th>
            </tr>
          </thead>

          <tbody>
            {userData.map((emp, index) => (
              <tr
                key={index}
                className="hover:bg-[#2e2e2e] transition-colors duration-150"
              >
                <td className="py-3 px-4 border border-gray-800 text-gray-400">
                  {emp.id}
                </td>
                <td className="py-3 px-4 border border-gray-800 font-medium">
                  {emp.name}
                </td>
                <td className="py-3 px-4 border border-gray-800 text-gray-400">
                  {emp.email}
                </td>
                <td className="py-3 px-4 border border-gray-800 text-center font-semibold text-gray-200">
                  {emp.taskCount.total}
                </td>
                <td className="py-3 px-4 border border-gray-800 text-center text-blue-400 font-medium">
                  {emp.taskCount.newTask}
                </td>
                <td className="py-3 px-4 border border-gray-800 text-center text-green-400 font-medium">
                  {emp.taskCount.completed}
                </td>
                <td className="py-3 px-4 border border-gray-800 text-center text-red-400 font-medium">
                  {emp.taskCount.failed}
                </td>
                <td className="py-3 px-4 border border-gray-800 text-center text-yellow-400 font-medium">
                  {emp.taskCount.active}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTask;
