import React from "react";

const Error: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="flex w-full justify-center rounded-md bg-red-400 py-3 text-sm text-white">
      <p>ERROR: {message}</p>
    </div>
  );
};

export default Error;
