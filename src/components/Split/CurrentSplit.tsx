import React from "react";

interface CurrentSplit {}

const CurrentSplit: React.FC<CurrentSplit> = () => {
  return (
    <button className="flex h-44 w-full items-start rounded-xl border-2 border-black bg-white px-4 font-coffee shadow-xl active:bg-gray-100">
      <div className="pt-6 text-start">
        <p>Your current split:</p>
        <p className="text-gray-500">N/A</p>
      </div>
      <img className="h-full" src="/images/chickenlift.png" alt="" />
    </button>
  );
};

export default CurrentSplit;
