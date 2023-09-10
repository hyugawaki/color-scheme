import { useEffect, useState } from "react";
import { SelectBox } from "../atoms/SelectBox";
import type { SchemeOption } from "../atoms/SelectBox";
import { ColorPicker } from "../atoms/ColorPicker";
import { Button } from "../atoms/Button";
import { ChangeEvent } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import { PiCopySimpleBold } from "react-icons/pi";

const schemes: string[] = [
  "monochrome",
  "monochrome-dark",
  "monochrome-light",
  "analogic",
  "complement",
  "analogic-complement",
  "triad",
];

type ColorApiRes = {
  colors: {
    hex: {
      value: string;
    };
  }[];
};

export default function App() {
  const options: SchemeOption[] = [
    ...schemes.map((scheme) => ({ label: scheme, value: scheme })),
  ];
  const [scheme, setScheme] = useState<string>("monochrome");

  const handleSchemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setScheme(e.target.value);
  };

  const [color, setColor] = useState<string>("#ffffff");

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setColor(e.target.value);
  };

  const [colorScheme, setColorScheme] = useState<string[]>([]);

  useEffect(() => {
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${color.slice(
        1
      )}&mode=${scheme}&count=5`
    )
      .then((res) => res.json())
      .then((data: ColorApiRes) => {
        const colors = data.colors.map((color) => color.hex.value);
        setColorScheme(colors);
      });
  }, []);

  const handleClick = () => {
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${color.slice(
        1
      )}&mode=${scheme}&count=5`
    )
      .then((res) => res.json())
      .then((data: ColorApiRes) => {
        const colors = data.colors.map((color) => color.hex.value);
        setColorScheme(colors);
      });
  };

  const [value, copy] = useCopyToClipboard();

  return (
    <div
      style={{ backgroundColor: color }}
      className="flex flex-col items-center h-screen"
    >
      <h1
        style={{ color: color === "#ffffff" ? "#000" : "#fff" }}
        className="text-2xl sm:text-4xl py-4"
      >
        Color Scheme
      </h1>
      <div className="lg:flex lg:gap-x-4 grid gap-y-4 pb-8">
        <ColorPicker value={color} onChange={handleColorChange} />
        <SelectBox
          options={options}
          value={scheme}
          onChange={handleSchemeChange}
          color={color}
        />
        <Button onClick={handleClick} color={color} />
      </div>
      <div
        className={`lg:flex grid grid-cols-3 bg-white px-3 pt-2 rounded ${
          color === "#ffffff" ? "border border-gray-300" : "border border-white"
        }`}
      >
        {colorScheme.map((color) => (
          <div className="lg:flex-col lg:m-0 lg:gap-0 sm:flex gap-2 mb-4 mr-4">
            <div
              style={{ backgroundColor: color }}
              className="h-10 w-10 lg:h-[25rem] lg:w-[6.875rem] rounded "
            ></div>
            <p
              className="text-center pt-1 cursor-pointer hover:bg-gray-200"
              onClick={() => copy(color)}
            >
              <PiCopySimpleBold />
              {value === color ? "Copied!" : color}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
