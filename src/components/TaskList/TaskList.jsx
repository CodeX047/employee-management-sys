const TaskList = () => {
  return (
    <div
      id="taskList"
      className="h-[60%] flex justify-start items-center gap-6 flex-nowrap w-full mt-10 py-5 overflow-x-auto text-black"
    >
      <div className="shrink-0 h-full w-[300px] bg-red-400 hover:bg-red-500 transition-colors duration-200 p-5 rounded-xl shadow-lg shadow-red-900/30">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-800 px-3 py-1 text-xs text-white rounded">
            High
          </h3>
          <h4 className="text-xs font-medium">20 Oct 2025</h4>
        </div>
        <h2 className="mt-7 text-2xl font-semibold">Make a Youtube video</h2>
        <p className="text-sm mt-2 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
          nihil, libero modi enim reiciendis accusantium.
        </p>
      </div>

      <div className="shrink-0 h-full w-[300px] bg-blue-400 hover:bg-blue-500 transition-colors duration-200 p-5 rounded-xl shadow-lg shadow-blue-900/30">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-800 px-3 py-1 text-xs text-white rounded">
            High
          </h3>
          <h4 className="text-xs font-medium">20 Oct 2025</h4>
        </div>
        <h2 className="mt-7 text-2xl font-semibold">Make a Youtube video</h2>
        <p className="text-sm mt-2 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
          nihil, libero modi enim reiciendis accusantium.
        </p>
      </div>

      <div className="shrink-0 h-full w-[300px] bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 p-5 rounded-xl shadow-lg shadow-yellow-900/30 text-black">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-700 text-white px-3 py-1 text-xs rounded">
            High
          </h3>
          <h4 className="text-xs font-medium">20 Oct 2025</h4>
        </div>
        <h2 className="mt-7 text-2xl font-semibold">Make a Youtube video</h2>
        <p className="text-sm mt-2 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
          nihil, libero modi enim reiciendis accusantium.
        </p>
      </div>

      <div className="shrink-0 h-full w-[300px] bg-green-400 hover:bg-green-500 transition-colors duration-200 p-5 rounded-xl shadow-lg shadow-green-900/30">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-800 text-white px-3 py-1 text-xs rounded">
            High
          </h3>
          <h4 className="text-xs font-medium">20 Oct 2025</h4>
        </div>
        <h2 className="mt-7 text-2xl font-semibold">Make a Youtube video</h2>
        <p className="text-sm mt-2 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
          nihil, libero modi enim reiciendis accusantium.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
