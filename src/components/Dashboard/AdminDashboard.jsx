import AllTask from "../../Other/AllTask";
import CreateTask from "../../Other/CreateTask";
import Header from "../../Other/Header";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full bg-[#1c1c1c] text-white p-8">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
