import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="taskList"
      className="h-[60%] flex justify-start items-center gap-6 flex-nowrap w-full mt-10 py-5 overflow-x-auto text-black"
    >
      {data.tasks.map((elem, index) => {
        if (elem.status == "In Progress") {
          return <NewTask data={elem} key={index} />;
        } else if (elem.status == "Pending") {
          return <AcceptTask data={elem} key={index} />;
        } else if (elem.status == "Completed") {
          return <CompleteTask data={elem} key={index} />;
        } else {
          return <FailedTask data={elem} key={index} />;
        }
      })}
    </div>
  );
};

export default TaskList;
