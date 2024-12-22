"use client";
import flatpickr from "flatpickr";
import React, { useEffect, useRef } from "react";

interface DatePickerProps {
  id: string;
  value?: string | null;
  onChange: (date: string) => void;
  label: string;
  placeholder?: string;
  required?: boolean;
  error?: string; // Validation error message
}

const DatePicker: React.FC<DatePickerProps> = ({
  id,
  value = null,
  onChange,
  label,
  placeholder = "Sélectionner une date",
  required = false,
  error,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      flatpickr(ref.current, {
        defaultDate: value || undefined,
        dateFormat: "Y-m-d",
        onChange: ([selectedDate]) => {
          if (selectedDate) {
            onChange(selectedDate.toISOString().split("T")[0]);
          }
        },
      });
    }
  }, [ref, value, onChange]);

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <div className="relative">
        <input
          id={id}
          ref={ref}
          defaultValue={value || ""}
          placeholder={placeholder}
          className={`form-datepicker w-full rounded-[7px] border px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:focus:border-primary ${
            error ? "border-red-500" : "border-stroke"
          }`}
          readOnly
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default DatePicker;
