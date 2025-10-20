const Header = () => {
  return (
    <div className="flex items-end justify-between pb-4 border-b border-gray-700">
      <h1 className="text-2xl font-medium text-gray-200">
        Hello, <br />
        <span className="text-3xl font-semibold text-white">Vishal 👋</span>
      </h1>
      <button className="bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white px-5 py-2 rounded-xl text-lg font-medium shadow-md shadow-red-900/30">
        Log Out
      </button>
    </div>
  );
};

export default Header;
