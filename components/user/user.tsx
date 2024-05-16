"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

import { Button } from "../ui/button";
import { getAlluser } from "@/data/user";
import { FaEdit } from "react-icons/fa";

const User = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getAlluser().then((e: any) => {
      setData(e);
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-20 relative">
      <>
        <div className="w-full h-[70px]  flex justify-between items-center">
          <div className="text-md font-bold">User List:</div>
        </div>
        <div className="w-full flex-1 ">
          <div className=" w-full grid-col  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  p-2 bg-blue-50 rounded-md gap-6 m-1">
            {data!.map((info, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-[100px] rounded-md shadow-md bg-white p-2 flex flex-row justify-center items-center relative"
                >
                  <div>
                    <div className="w-[50px] h-[50px] flex justify-center items-center bg-black text-white rounded-full ">
                      {" "}
                      {info.name[0]}
                    </div>
                  </div>
                  <div className=" h-[30px] mt-3 px-3 flex flex-col justify-center items-start rounded-md shadow-sm">
                    <p className=" text-sm font-bold"> {info.name}</p>
                    <p className=" text-sm font-bold"> {info.email}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    </div>
  );
};

export default User;
