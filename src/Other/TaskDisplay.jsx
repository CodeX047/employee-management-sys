const TaskDisplay = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
      <div className="px-9 py-6 bg-red-500 hover:bg-red-600 transition-colors duration-200 rounded-xl shadow-lg shadow-red-900/30">
        <h2 className="text-2xl font-semibold text-white">0</h2>
        <h3 className="text-xl font-medium text-white">New Task</h3>
      </div>
      <div className="px-9 py-6 bg-blue-500 hover:bg-blue-600 transition-colors duration-200 rounded-xl shadow-lg shadow-blue-900/30">
        <h2 className="text-2xl font-semibold text-white">0</h2>
        <h3 className="text-xl font-medium text-white">Completed</h3>
      </div>
      <div className="px-9 py-6 bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 rounded-xl shadow-lg shadow-yellow-900/30">
        <h2 className="text-2xl font-semibold text-black">0</h2>
        <h3 className="text-xl font-medium text-black">Accepted</h3>
      </div>
      <div className="px-9 py-6 bg-green-500 hover:bg-green-600 transition-colors duration-200 rounded-xl shadow-lg shadow-green-900/30">
        <h2 className="text-2xl font-semibold text-white">0</h2>
        <h3 className="text-xl font-medium text-white">Failed</h3>
      </div>
    </div>
  );
};

export default TaskDisplay;
