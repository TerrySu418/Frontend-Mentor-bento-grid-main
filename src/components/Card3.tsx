import { Sparkle, ArrowUp } from "lucide-react";

export const Card3 = () => {
  return (
    <div className="flex flex-col items-center justify-between mx-4 h-full px-4 py-6">
      <div className="font-bold text-[24px] leading-tight">
        Write your content using AI
      </div>
      <div className="rounded-xl w-36 bg-white flex flex-col gap-1 p-2 relative">
        <div className="text-purple-500 flex items-center justify-center absolute top-10 left-27 z-10 bg-yellow-500 rounded-full w-10 h-10 outline-[12px] outline-white">
          <ArrowUp size={24} stroke-width="2.5px" />
        </div>
        <div className="flex gap-1">
          <div className="flex-1 rounded-3xl bg-red-400/[10%] text-[8px] p-2 text-end">
            Give me a 5 tips to growth my followers on Insta!
          </div>
          <div className="flex-none rounded-full w-6 h-6 bg-amber-300">
            <img src="https://avatar.iran.liara.run/public" />
          </div>
        </div>
        <div className="flex gap-1">
          <div className="flex items-center justify-center rounded-full w-6 h-6 bg-purple-100 text-purple-500">
            <Sparkle size={16} fill="hsl(256, 67%, 59%)" />
          </div>
          <div className="flex-1 rounded-3xl bg-yellow-400/[10%] text-[8px] p-3 text-start">
            Certainly! Here are five tips to help you grow your Instagram...
          </div>
        </div>
      </div>
    </div>
  );
};
