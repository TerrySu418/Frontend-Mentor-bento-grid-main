import Schedule from "./Schedule";

const Card2 = () => {
  return (
    <div className="flex flex-col justify-center items-center my-4 overflow-hidden">
      <div className="flex flex-col w-4/5 gap-2">
        <div className="font-extrabold text-[18px]">
          Schedule to social media.
        </div>
        <div className="w-[250px]">
          <Schedule />
        </div>
        <div className="text-xs w-full">
          Optimize post things to publish content at the perfect time for your
          audience.
        </div>
      </div>
    </div>
  );
};

export default Card2;
