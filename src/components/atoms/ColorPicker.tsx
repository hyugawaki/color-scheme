import { ChangeEvent } from "react";

type GetColorProps = {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const ColorPicker = ({ value, onChange }: GetColorProps) => {
  const colorPicker = (
    <input
      type="color"
      value={value}
      onChange={onChange}
      className="h-8 my-auto bg-white cursor-pointer" 
    />
  );
  return <>{colorPicker}</>;
};
