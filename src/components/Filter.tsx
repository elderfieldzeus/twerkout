import React from "react";

interface FilterProps {
  children?: React.ReactNode;
}

const Filter: React.FC<FilterProps> = ({ children }) => {
  return (
    <div className="fixed z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-50">
      {children}
    </div>
  );
};

export default Filter;
