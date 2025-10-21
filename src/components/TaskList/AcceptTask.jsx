const AcceptTask = ({data}) => {
  return (
    <div className="shrink-0 h-full w-[320px] bg-transparent border-3 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 p-5 rounded-2xl shadow-lg shadow-yellow-900/40 hover:shadow-yellow-500/30">
      <div className="flex justify-between items-center">
        <h3 className="bg-yellow-600/30 border border-yellow-500/30 px-3 py-1 text-xs text-yellow-300 rounded-lg">
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
        <button className="bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30 rounded-xl py-1.5 px-3 text-xs font-medium transition-all duration-200 cursor-pointer">
          Mark as Completed
        </button>
        <button className="bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 rounded-xl py-1.5 px-3 text-xs font-medium transition-all duration-200 cursor-pointer">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
