import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [newTask, setNewTask] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewTask({
      title,
      description,
      date,
      category,
      assignTo,
      status: "Pending",
      newTask: true,
      completed: false,
      failed: false,
    });

    const data = userData;

    data.forEach((emp) => {
      if (assignTo == emp.name) {
        emp.tasks.push(newTask);
        emp.taskCount.newTask = emp.taskCount.newTask + 1;
      }
    });

    setUserData(data);

    setTitle("");
    setDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 bg-[#2a2a2a] rounded-2xl shadow-xl p-10 border border-gray-800">
      <h2 className="text-3xl font-semibold mb-10 text-center">
        Create New Task
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-10 justify-between"
      >
        <div className="flex-1 min-w-[280px] flex flex-col gap-6">
          {/* Task Title */}
          <label className="flex flex-col gap-2">
            <span className="text-sm text-gray-300 font-medium">
              Task Title
            </span>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Enter task title"
              className="bg-[#1c1c1c] border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>

          {/* Date */}
          <label className="flex flex-col gap-2">
            <span className="text-sm text-gray-300 font-medium">Date</span>
            <input
              type="date"
              name="date"
              value={date}
              className="bg-[#1c1c1c] border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </label>

          {/* Assign To */}
          <label className="flex flex-col gap-2">
            <span className="text-sm text-gray-300 font-medium">Assign To</span>
            <input
              type="text"
              name="assign"
              value={assignTo}
              placeholder="Employee Name"
              className="bg-[#1c1c1c] border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
            />
          </label>

          {/* Category */}
          <label className="flex flex-col gap-2">
            <span className="text-sm text-gray-300 font-medium">Category</span>
            <input
              type="text"
              name="category"
              value={category}
              placeholder="e.g. design, dev, marketing"
              className="bg-[#1c1c1c] border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
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
              value={description}
              placeholder="Enter task details..."
              className="bg-[#1c1c1c] border border-gray-700 text-white px-4 py-2 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
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
