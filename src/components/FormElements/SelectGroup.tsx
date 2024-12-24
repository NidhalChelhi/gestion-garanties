"use client";
import { Option } from "@/actions/tiersPersonnePhysique";
import { ChevronDown } from "lucide-react";
import React from "react";

interface SelectGroupProps {
  name: string;
  value?: string | number | null;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  placeholder?: string;
  required?: boolean;
  options: Option[];
  customClasses?: string;
  error?: string;
}

const SelectGroup: React.FC<SelectGroupProps> = ({
  name,
  value,
  onChange,
  label,
  placeholder = "Sélectionner une option",
  required = false,
  options,
  customClasses = "",
  error,
}) => {
  return (
    <div className={`mb-4.5 ${customClasses}`}>
      <label
        htmlFor={name}
        className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <div className="relative z-20 bg-transparent dark:bg-dark-2">
        <select
          id={name}
          name={name}
          value={value || ""}
          onChange={onChange}
          className={`relative z-20 w-full appearance-none rounded-[7px] border px-5.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:focus:border-primary ${
            error
              ? "border-red-500 text-red-500"
              : value
                ? "text-dark dark:text-white"
                : "text-gray-400"
          }`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value.toString()} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
          <ChevronDown
            className={` ${
              error ? "text-red-500" : "text-gray-600 dark:text-gray-300"
            }`}
          />
        </span>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default SelectGroup;
