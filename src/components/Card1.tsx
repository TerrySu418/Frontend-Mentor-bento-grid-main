import { Star } from "lucide-react";

const Card1 = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full text-[19px]">
      <div className="font-extrabold text-white text-[32px]">Social Media <span className="text-yellow-500">10X</span></div>

      <div className="font-extrabold text-white text-[32px]">Faster with AI</div>
      <div className="flex flex-row gap-1 text-yellow-500 mt-2">
        <Star size={14} fill="hsl(39, 100%, 71%)"/>
        <Star size={14} fill="hsl(39, 100%, 71%)"/>
        <Star size={14} fill="hsl(39, 100%, 71%)"/>
        <Star size={14} fill="hsl(39, 100%, 71%)"/>
        <Star size={14} fill="hsl(39, 100%, 71%)"/>
      </div>
      <div className="text-xs text-white mt-1">Over 4,000 5-stars review</div>
    </div>
  );
};

export default Card1;
