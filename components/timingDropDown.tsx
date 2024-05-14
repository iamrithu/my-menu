import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { getDrink } from "@/data/drink";

interface Props {
  value: string;
  data: any[];
  onClick: Function;
}

const DropDown = ({ data, onClick, value }: Props) => {
  const [val, setVal] = useState<string>("");

  useEffect(() => {
    setVal(value);
  }, [value]);

  return (
    <Select
      value={val}
      onValueChange={(e) => {
        var filData = data.filter((i, j) => i.name === e);
        setVal(e);
        onClick(filData);
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent className="w-full">
        {data.map((info: any, index) => (
          <SelectItem key={index} value={info.name}>
            {info.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DropDown;
