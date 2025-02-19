import { Instagram, Twitter } from "lucide-react";

const Card4 = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden w-full h-full">
      <div className="flex flex-col items-between justify-between w-full h-full px-4 py-10">
        <div className="flex gap-2">
          <div className="shrink-0 rounded-full h-10 w-26 bg-white flex items-center justify-betweem px-2">
            <div className="flex items-center justify-center text-purple-500 rounded-full h-6 w-6 bg-yellow-500 shrink-0 mr-2">
              <Instagram size={12} strokeWidth={3} />
            </div>
            <div className="flex flex-col">
              <div className="text-[10px] font-bold">@Your Co</div>
              <div className="text-[8px] text-gray-500">12K Followers</div>
            </div>
          </div>
          <div className="shrink-0 rounded-full h-10 w-26 bg-white flex items-center justify-betweem px-2">
            <div className="flex items-center justify-center text-purple-500 rounded-full h-6 w-6 bg-yellow-500 shrink-0 mr-2">
              <Twitter size={12} strokeWidth={3} />
            </div>
            <div className="flex flex-col">
              <div className="text-[10px] font-bold">@Your Co</div>
              <div className="text-[8px] text-gray-500">12K Followers</div>
            </div>
          </div>
        </div>
        <div className="font-extrabold text-[18px]">
          Manage mutiplie accounts and platfroms.
        </div>
      </div>
    </div>
  );
};

export default Card4;
