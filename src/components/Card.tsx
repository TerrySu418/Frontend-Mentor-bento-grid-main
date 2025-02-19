import { Sparkle } from "lucide-react";

const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="flex flex-col justify-center">
        <p className="flex flex-col mb-5 text-[24px] leading-none">
          <span className="font-bold">Create and</span>
          <span className="font-bold">schedule</span>
          <span className="font-bold">content</span>
          <em className="text-purple-500 font-bold">quicker.</em>
        </p>
        <div className="rounded-full h-10 w-32 bg-yellow-500 px-5 flex items-center justify-center text-purple-500 font-bold text-xs gap-1.5">
          Create post
          <Sparkle size={14} fill="hsl(256, 67%, 59%)"/>
        </div>
      </div>
    </div>
  );
};

export default Card;
