import React from "react";

interface InlineProps {
  className?: string;
  children: React.ReactNode;
}

const Inline: React.FC<InlineProps> = ({ className, children }) => {
  return <div className={`flex gap-1 ${className}`}>{children}</div>;
};

export default Inline;
