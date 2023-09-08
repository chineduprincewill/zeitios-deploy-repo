import React from "react";

const CustomRadio = ({ label, name, value, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        className="form-radio border-gray-300 h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
};

export default CustomRadio;
