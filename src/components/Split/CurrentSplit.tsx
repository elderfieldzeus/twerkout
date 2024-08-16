import React from "react";

interface CurrentSplit {}

const CurrentSplit: React.FC<CurrentSplit> = () => {
  return (
    <button className="h-44 w-full rounded-xl border border-black bg-white shadow-xl active:bg-gray-100 flex px-4 font-coffee items-start">
      <div className="text-start pt-6">
        <p>Your current split:</p>
        <p className="text-gray-500">N/A</p>
      </div>
      <img className="h-full" src="/images/chickenlift.png" alt="" />
    </button>
  );
};

export default CurrentSplit;
