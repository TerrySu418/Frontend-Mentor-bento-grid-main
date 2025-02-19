const Schedule = () => {
  const data = [
    {
      time: "12a",
      height: 40,
    },
    {
      time: "3a",
      height: 47,
    },
    {
      time: "6a",
      height: 80,
    },
    {
      time: "9a",
      height: 58,
    },
    {
      time: "12p",
      height: 52,
    },
    {
      time: "3p",
      height: 60,
    },
    {
      time: "6p",
      height: 56,
    },
    {
      time: "9p",
      height: 48,
    },
  ];

  return (
    <div className="bg-white h-full w-full rounded-xl py-4 px-2 z-50">
      <div>Best Time to Post</div>
      <hr className="my-2 text-gray-300"></hr>
      <div className="flex gap-2 text-xs">
        <div className="rounded-full bg-red-400/[20%] text-red-400 w-8 h-5 grid place-items-center text-[10px] font-bold">
          Mon
        </div>
        <div className="rounded-full text-gray-300 w-8 h-5 grid place-items-center text-[10px]">
          Tue
        </div>
        <div className="rounded-full text-gray-300 w-8 h-5 grid place-items-center text-[10px]">
          Wed
        </div>
        <div className="rounded-full text-gray-300 w-8 h-5 grid place-items-center text-[10px]">
          Thu
        </div>
        <div className="rounded-full text-gray-300 w-8 h-5 grid place-items-center text-[10px]">
          Fri
        </div>
        <div className="rounded-full text-gray-300 w-8 h-5 grid place-items-center text-[10px]">
          Sun
        </div>
        <div className="rounded-full text-gray-300 w-8 h-5 grid place-items-center text-[10px]">
          Sat
        </div>
      </div>
      <div className="flex gap-2 h-full items-end mt-4 w-">
        {data.map((bar) => (
          <div className="w-8 flex flex-col items-center space-y-2">
            <div
              className={`rounded-xl grid place-content-center h-5 w-20 bg-green-400/[10%] text-xs text-green-400 font-bold ${
                bar.height === 80 ? "" : "hidden"
              }`}
            >
              Most Active
            </div>
            <div
              style={{ height: `${bar.height}px` }}
              className={` bg-purple-500 rounded-full w-4 z-100`}
            ></div>
            <p className="text-xs">{bar.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
