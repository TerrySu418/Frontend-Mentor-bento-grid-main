const Card6 = () => {
  return (
    <div className="flex justify-center items-center w-full h-full gap-8">
      <div className="flex flex-col items-center justify-between w-full h-full px-4 py-10">
        <div className="font-extrabold text-[32px] text-start w-full">&gt;56%</div>

        <div className="font-extrabold text-[12px] test-start w-full">faster audience growth</div>

        <div className="font-extrabold text-[18px] flex">
          <img
            src="https://avatar.iran.liara.run/public/boy"
            className="h-12 w-12"
          />
          <img
            src="https://avatar.iran.liara.run/public/girl"
            className="h-12 w-12 -ml-2"
          />
          <img
            src="https://avatar.iran.liara.run/public/34"
            className="h-12 w-12 -ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Card6;
