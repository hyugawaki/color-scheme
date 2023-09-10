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
      className="lg:my-auto sm:bg-white bg-black place-self-center rounded h-8 cursor-pointer" 
    />
  );
  return <>{colorPicker}</>;
};
