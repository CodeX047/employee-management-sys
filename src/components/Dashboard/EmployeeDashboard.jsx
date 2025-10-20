import Header from "../../Other/Header"
import TaskDisplay from "../../Other/TaskDisplay"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header />
      <TaskDisplay />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
