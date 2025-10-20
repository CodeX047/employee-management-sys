const CreateTask = () => {
  return (
    <div className="max-w-5xl mx-auto mt-12 bg-[#2a2a2a] rounded-2xl shadow-xl p-10 border border-gray-800">
      <h2 className="text-3xl font-semibold mb-10 text-center">
        Create New Task
      </h2>

      <form className="flex flex-wrap gap-10 justify-between">
        <div className="flex-1 min-w-[280px] flex flex-col gap-6">
          {/* Task Title */}
          <label className="flex flex-col gap-2">
            <span className="text-sm text-gray-300 font-medium">
              Task Title
            </span>
            <input
              type="text"
              name="title"
              placeholder="Enter task title"
              className="bg-[#1c1c1c] border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </label>

          {/* Date */}
          <label className="flex flex-col gap-2">
            <span className="text-sm text-gray-300 font-medium">Date</span>
            <input
              type="date"
              name="date"
              className="bg-[#1c1c1c] border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </label>

          {/* Assign To */}
          <label className="flex flex-col gap-2">
            <span className="text-sm text-gray-300 font-medium">Assign To</span>
            <input
              type="text"
              name="assign"
              placeholder="Employee Name"
              className="bg-[#1c1c1c] border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </label>

          {/* Category */}
          <label className="flex flex-col gap-2">
            <span className="text-sm text-gray-300 font-medium">Category</span>
            <input
              type="text"
              name="category"
              placeholder="e.g. design, dev, marketing"
              className="bg-[#1c1c1c] border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </label>
        </div>

        <div className="flex-1 min-w-[280px] flex flex-col justify-between">
          {/* Description */}
          <label className="flex flex-col gap-2">
            <span className="text-sm text-gray-300 font-medium">
              Description
            </span>
            <textarea
              name="description"
              rows="8"
              placeholder="Enter task details..."
              className="bg-[#1c1c1c] border border-gray-700 text-white px-4 py-2 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </label>

          {/* Button */}
          <button
            type="submit"
            className="mt-6 bg-red-500 hover:bg-red-600 transition-colors duration-200 text-white font-semibold py-3 rounded-lg shadow-md"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
