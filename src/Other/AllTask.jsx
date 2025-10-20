const AllTask = () => {
  return (
    <div className="bg-[#1c1c1c] text-white mt-12 p-8 rounded-2xl border border-gray-800 shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">All Tasks</h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {/* Single Task Card */}
        <div className="bg-[#2a2a2a] w-[300px] rounded-xl p-6 shadow-md border border-gray-700 hover:scale-[1.02] transition-transform duration-200">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-white">Vishal</h3>
            <span className="bg-red-600 text-xs px-3 py-1 rounded-full font-medium">
              High
            </span>
          </div>

          <h4 className="text-xl font-semibold text-gray-100">
            Make a UI Design
          </h4>

          <p className="text-sm text-gray-400 mt-2">
            Create the frontend for the new task manager dashboard with Tailwind
            and React components.
          </p>

          <div className="mt-5 flex justify-between items-center">
            <span className="text-xs text-gray-400">Due: 25 Oct 2025</span>
            <span className="text-sm font-medium text-yellow-400">
              In Progress
            </span>
          </div>
        </div>

        {/* Example 2 */}
        <div className="bg-[#2a2a2a] w-[300px] rounded-xl p-6 shadow-md border border-gray-700 hover:scale-[1.02] transition-transform duration-200">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-white">Rohit</h3>
            <span className="bg-blue-600 text-xs px-3 py-1 rounded-full font-medium">
              Medium
            </span>
          </div>

          <h4 className="text-xl font-semibold text-gray-100">
            API Integration
          </h4>

          <p className="text-sm text-gray-400 mt-2">
            Connect the backend APIs for user authentication and task
            management.
          </p>

          <div className="mt-5 flex justify-between items-center">
            <span className="text-xs text-gray-400">Due: 26 Oct 2025</span>
            <span className="text-sm font-medium text-green-400">
              Completed
            </span>
          </div>
        </div>

        {/* Example 3 */}
        <div className="bg-[#2a2a2a] w-[300px] rounded-xl p-6 shadow-md border border-gray-700 hover:scale-[1.02] transition-transform duration-200">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-white">Aayan</h3>
            <span className="bg-yellow-500 text-xs px-3 py-1 rounded-full font-medium text-black">
              Low
            </span>
          </div>

          <h4 className="text-xl font-semibold text-gray-100">
            Update Presentation Slides
          </h4>

          <p className="text-sm text-gray-400 mt-2">
            Revise the pitch deck with updated design mockups and feature
            screenshots.
          </p>

          <div className="mt-5 flex justify-between items-center">
            <span className="text-xs text-gray-400">Due: 28 Oct 2025</span>
            <span className="text-sm font-medium text-red-400">Pending</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
