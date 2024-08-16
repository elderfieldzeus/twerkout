import React from "react";
import ArchivedSplit from "./ArchivedSplit";

const PastSplits: React.FC = () => {
  return (
    <div className="mt-8">
      <p className="font-coffee">Previous splits</p>
      <div className="my-4 grid w-full grid-cols-2 gap-5">
        <ArchivedSplit />
        <ArchivedSplit />
        <ArchivedSplit />
        <ArchivedSplit />
      </div>
    </div>
  );
};

export default PastSplits;
