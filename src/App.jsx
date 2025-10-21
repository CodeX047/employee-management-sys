import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setuser] = useState(null);
  const authData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (email == "admin@company.com" && password == 123) {
      setuser("admin");
    } else if (email == "vishal.patil@company.com" && password == 123) {
      setuser("employee");
    } else {
      alert("Invaild Credentials");
    }
  };

  return (
    <div className="text-white">
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </div>
  );
};

export default App;
