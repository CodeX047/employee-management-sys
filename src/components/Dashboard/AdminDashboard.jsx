import AllTask from "../../Other/AllTask";
import CreateTask from "../../Other/CreateTask";
import Header from "../../Other/Header";

const AdminDashboard = ({ changeUser }) => {
  return (
    <div className="min-h-screen w-full bg-[#1c1c1c] text-white p-8">
      <Header changeUser={changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
