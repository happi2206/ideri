import React from 'react';

interface Props {
  label?: string;
  placeholder?: string;
}
const Input = ({ label, placeholder }: Props) => {
  return (
    <div className="space-y-2">
      <label className="mb-2 text-sm md:text-base text-primary">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-3 py-4 text-xs border text-customgray600 bg-customgray200 focus:outline-none border-primary"
      />
    </div>
  );
};

export default Input;
