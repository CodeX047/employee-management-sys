import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const updateLocalStorage = (updatedData) => {
    localStorage.setItem("employees", JSON.stringify(updatedData));

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && loggedInUser.data) {
      const updatedUserData = updatedData.find(
        (emp) => emp.email === loggedInUser.data.email
      );
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...loggedInUser, data: updatedUserData })
      );
    }
  };

  const accept = () => {
    const empData = [...userData];

    emp.forEach((emp) => {
      emp.tasks.forEach((t) => {
        if (data.title === t.title) {
          t.newTask = false;
          t.status = "Pending";
          emp.taskCount.newTask -= 1;
          emp.taskCount.active += 1;
        }
      });
    });

    setUserData(empData);
    updateLocalStorage(empData);
    window.location.reload();
  };

  if (!data.newTask) {
    return null;
  }

  return (
    <div className="shrink-0 h-full w-[320px] bg-transparent border-3 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 p-5 rounded-2xl shadow-lg shadow-blue-900/40 hover:shadow-blue-500/30">
      <div className="flex justify-between items-center">
        <h3 className="bg-blue-600/30 border border-blue-500/30 px-3 py-1 text-xs text-blue-300 rounded-lg">
          {data.category}
        </h3>
        <h4 className="text-xs font-medium text-gray-400">{data.date}</h4>
      </div>

      <h2 className="mt-6 text-xl font-semibold text-white tracking-wide">
        {data.title}
      </h2>

      <p className="text-sm mt-3 text-gray-300 leading-relaxed">
        {data.description}
      </p>

      <div className="flex justify-between mt-6">
        <button
          onClick={accept}
          className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-500/30 rounded-xl py-1.5 px-3 text-xs font-medium transition-all duration-200 cursor-pointer w-full"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
