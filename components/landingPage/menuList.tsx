"use client";
import { getAllMenu } from "@/data/menu";
import React, { useEffect, useState } from "react";
import { DatePickerDemo } from "../datePicker";
import { format } from "date-fns";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const MenuList = () => {
  const [data, setData] = useState<any[]>([]);
  const [date, setDte] = useState<string>("");

  useEffect(() => {
    getAllMenu().then((e: any) => {
      setData(e);
    });
  }, []);
  if (data.length < 1) {
    return (
      <div className="w-full h-[300px] p-2  rounded-sm mt-4 flex justify-center items-center">
        <p className="text-sm text-gray-600">data not found.</p>
      </div>
    );
  }
  return (
    <div className="w-full h-full p-2  rounded-sm mt-4">
      <DatePickerDemo
        onChange={(e: any) => {
          if (e) {
            setDte(format(e, "yyyy-MM-dd"));
          } else {
            setDte("");
          }
        }}
      />
      <div className="w-full h-auto grid grid-cols-1 md:grid:cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 ">
        {!date &&
          data.map((info, index) => {
            return (
              <Dialog>
                <DialogTrigger>
                  {" "}
                  <div
                    key={index}
                    className="w-full h-[300px] flex flex-col bg-white justify-center items-center rounded-xl shadow-md  relative cursor-pointer md:hover:-mt-1 duration-300"
                  >
                    <div className="w-full h-[200px] relative">
                      <Image
                        alt="Upload"
                        src={info.image}
                        fill
                        className="rounded-xl"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="flex-1 w-full flex flex-col justify-center items-end mr-3">
                      <p className="text-sm font-bold ">{info.name}</p>
                      <p className="p-[4px] rounded-md bg-slate-500 text-white text-sm lowercase">
                        {info.timing}
                      </p>
                      <p className="text-green-500 text-sm font-bold ">
                        {info.menuDate}
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="w-[400px] md:w-[600px] h-[700px]">
                  <DialogHeader>
                    <DialogTitle>{info.name}</DialogTitle>
                  </DialogHeader>
                  <div className="w-full h-[250px] relative">
                    <Image
                      alt="Upload"
                      src={info.image}
                      fill
                      className="rounded-xl"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div className="flex-1 w-full flex flex-col justify-center items-end mr-3">
                    <p className="text-sm font-bold ">{info.name}</p>
                    <p className="p-[4px] rounded-md bg-slate-500 text-white text-sm lowercase">
                      {info.timing}
                    </p>
                    <p className="text-green-500 text-sm font-bold ">
                      {info.menuDate}
                    </p>
                  </div>
                  <p className="p-2 bg-black text-sm text-white font-white">
                    Items:
                  </p>
                  <div className="w-full flex h-[250px] flex-row ">
                    <div className="flex-1 h-[250px] flex flex-col justify-start items-center">
                      <div className="w-full h-[150px] relative">
                        <Image
                          alt="Upload"
                          src={info.foodImg}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <p className="font-bold text-sm mt-2 italic">
                        {info.food}
                      </p>
                    </div>
                    <div className="flex-1 h-[250px] flex flex-col justify-start items-center">
                      <div className="w-full h-[150px] relative">
                        <Image
                          alt="Upload"
                          src={info.drinksImg}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <p className="font-bold text-sm mt-2 italic">
                        {info.drinks}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        {date &&
          data.map((info, index) => {
            if (date === info.menuDate) {
              return (
                <div
                  key={index}
                  className="w-full h-[300px] flex flex-col justify-center items-center rounded-xl shadow-md  relative cursor-pointer md:hover:-mt-1 duration-300"
                >
                  <div className="w-full h-[200px] relative">
                    <Image
                      alt="Upload"
                      src={info.image}
                      fill
                      className="rounded-xl"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="flex-1 w-full flex flex-col justify-start items-start ml-3">
                    <p className="text-sm font-bold ">{info.name}</p>
                    <p className="p-[4px] rounded-md bg-slate-500 text-white text-sm lowercase">
                      {info.timing}
                    </p>
                    <p className="text-green-500 text-sm font-bold ">
                      {info.menuDate}
                    </p>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default MenuList;
