"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@radix-ui/react-checkbox";
interface props {
  inc: any;
  val: string;
  onClick: Function;
}

const SelectIncredient = ({ inc, onClick, val }: props) => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    if (val) {
      var newd = val.split(",");
      setData((e) => [...newd]);
    }
  }, [val]);
  return (
    <Sheet>
      <SheetTrigger className="w-full">
        <div className="w-full h-[60px] justify-start flex p-2 text-sm  items-start  border-2 border-stone-100 rounded-sm shadow-sm">
          {data.join(",")}
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Incredeients</SheetTitle>
          <SheetDescription>
            {/* This action cannot be undone. This will permanently delete your
            account and remove your data from our servers. */}
          </SheetDescription>
        </SheetHeader>
        <div className=" w-full grid-col  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 m-1">
          {inc.map((info: any, index: any) => {
            return (
              <div
                onClick={() => {
                  if (data.includes(info.name)) {
                    onClick(data.filter((d) => d != info.name));

                    setData((e) => e.filter((d) => d != info.name));
                  } else {
                    onClick([...data, info.name]);

                    setData((e: any) => [...e, info.name]);
                  }
                }}
                key={index}
                className={`w-full h-[30px] flex justify-center items-center ${
                  data.includes(info.name) && "border"
                }  border-red-500 shadow-md cursor-pointer rounded-md `}
              >
                {info.name}
              </div>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SelectIncredient;
