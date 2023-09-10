import { ChangeEvent } from "react";

export type SchemeOption = {
  label: string;
  value: string;
};

type GetSchemeProps = {
  value?: string;
  options: SchemeOption[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  color: string;
};

export const SelectBox = ({
  value,
  options,
  onChange,
  color,
}: GetSchemeProps) => {
  const selectBoxClasses = `w-64 rounded px-1 cursor-pointer ${color === "#ffffff" ? "border border-gray-300" : "border border-white"}`;

  return (
    <select
      onChange={onChange}
      value={value}
      size={1}
      className={selectBoxClasses}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
