import React from "react";

interface InputGroupProps {
  name: string;
  value?: string | number | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type: "text" | "number";
  placeholder?: string;
  required?: boolean;
  error?: string; // Validation error message
}

const InputGroup: React.FC<InputGroupProps> = ({
  name,
  value = "",
  onChange,
  label,
  type,
  placeholder = "",
  required = false,
  error,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        value={value || ""}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        aria-required={required}
        className={`w-full rounded-[7px] border-[1.5px] px-5.5 py-3 outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary ${
          error ? "border-red-500" : "border-stroke"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputGroup;
