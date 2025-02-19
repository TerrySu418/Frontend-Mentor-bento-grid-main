import { ArrowUp } from "lucide-react";

const Card7 = () => {
  const data = [42, 52, 62, 88, 88];

  return (
    <div className="flex items-center justify-center p-4 h-full w-full gap-6">
      <section className="p-4 bg-white rounded-2xl relative">
        <div className="flex justify-between items-end">
          <div className="min-w-[90px]">
            <h2 className="text-gray-300 text-[10px]">Followers Growth</h2>
            <h1 className="text-[24px] font-bold">20,642</h1>
          </div>

          <div className="mb-2 h-[20px] rounded-full bg-green-400/[10%] p-1 text-green-400 text-[8px] flex justify-center items-center">
            +490%
          </div>
        </div>

        <div className="flex justify-between items-end">
          {data.map((num, index) => (
            <div
              key={index}
              className="bg-purple-500 rounded-full w-4 z-150"
              style={{ height: `${num}px` }}
            ></div>
          ))}
        </div>

        <div className="absolute h-15 bg-white rounded-full top-30 left-10 z-150 flex justify-between items-center p-2 gap-0.5">
          <div className="text-purple-500 w-8 h-8 rounded-full bg-yellow-500 shrink-0 flex justify-center items-center">
            <ArrowUp size={24} stroke-width="2.5px" />
          </div>
          <div className="">
            <p className="text-gray-500 text-[8px]">Follwers</p>
            <p className="text-bold text-[20px]">89,532</p>
          </div>

          <div className="mt-4 p-1 h-[20px] rounded-full bg-green-400/[10%] text-green-400 text-[8px] flex justify-center items-center">
            +120%
          </div>
        </div>
      </section>

      <h1 className="text-[24px] text-white font-bold ml-3">
        Grow followers with non-stop content.
      </h1>
      {/* <div
              style={{ height: `${bar.height}px` }}
              className={` bg-purple-500 rounded-full w-4 z-100`}
            ></div> */}
    </div>
  );
};

export default Card7;
