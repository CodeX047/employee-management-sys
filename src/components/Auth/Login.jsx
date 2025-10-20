import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Done");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#1a1a1a]">
      <div className="border-2 rounded-xl border-emerald-600 p-12 shadow-lg shadow-emerald-900/30">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent outline-none border-2 border-emerald-600 focus:border-emerald-400 rounded-full py-3 px-5 text-xl text-white placeholder:text-gray-400 transition-colors duration-200"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-transparent outline-none border-2 border-emerald-600 focus:border-emerald-400 rounded-full py-3 px-5 text-xl text-white placeholder:text-gray-400 transition-colors duration-200"
            type="password"
            placeholder="Enter password"
            required
          />
          <button className="text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-200 rounded-full py-3 px-8 text-xl font-medium">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
