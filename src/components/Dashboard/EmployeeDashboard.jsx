import Header from "../../Other/Header";
import TaskDisplay from "../../Other/TaskDisplay";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <div className="p-10 bg-[#2c2c2c] h-screen">
      <Header data={data} />
      <TaskDisplay data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
