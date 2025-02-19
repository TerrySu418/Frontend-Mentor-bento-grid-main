const Card5 = () => {
  const rows = Array(4).fill(null);
  const cols = Array(4).fill(null);

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full overflow-y-hidden px-4 pt-4 gap-4">
      <div className="font-extrabold text-[18px]">
        Maintain a consistent posting schedule.
      </div>

      <div className="relative w-full h-full">
        <div className="bg-white w-full h-[200px] rounded-2xl absolute left-1/2 -translate-x-1/2 z-500">
          <div className="flex flex-col">
            <div className="w-full h-[30px] bg-purple-500 rounded-t-2xl text-white text-xs p-4 flex items-center justify-between">
              <span>August 2024</span>
              <span>Week1</span>
            </div>
          </div>

          {/* Checkmarks row */}
          <div className="px-4 pt-2 flex justify-between">
            {rows.map((_, rowindex) => (
              <div
                key={rowindex}
                className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  strokeWidth="3"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            ))}
          </div>

          {/*Checkbow row */}
          <div className="px-4 pb-2 flex justify-between">
            {rows.map((_, index) => (
              <div key={index} className="">
                {cols.map((_, colindex) => (
                  <div
                    key={colindex}
                    className="w-6 h-6 bg-yellow-100 my-2"
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card5;
