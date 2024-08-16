import React from "react";

interface InputProps {
  type?: string;
  placeholder: string;
  value: string;
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  handleOnChange,
  required = false,
}) => {
  return (
    <input
      type={type}
      className="h-12 w-full rounded-lg bg-gray-100 px-4 focus:outline-yellow-400"
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      required={required}
    />
  );
};

export default Input;
