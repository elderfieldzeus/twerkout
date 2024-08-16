import React from "react";

interface CurrentSplit {}

const CurrentSplit: React.FC<CurrentSplit> = () => {
  return (
    <button className="flex h-44 w-full items-start justify-between rounded-xl border-2 border-black bg-yellow-400 px-4 font-coffee shadow-xl transition-all active:bg-yellow-500">
      <div className="pt-6 text-start">
        <p>Your current split:</p>
        <p className="text-gray-600">N/A</p>
      </div>
      <img
        className="h-full select-none"
        src="/images/chickenlift.png"
        alt=""
      />
    </button>
  );
};

export default CurrentSplit;
