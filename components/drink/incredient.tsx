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
import FormContainer from "./form";
import { getDrink } from "@/data/drink";
import { FaEdit } from "react-icons/fa";

const Drink = () => {
  const [data, setData] = useState<any[]>([]);

  const getItems = () => {
    getDrink().then((e: any) => {
      setData(e);
    });
  };
  useEffect(() => {
    getDrink().then((e: any) => {
      setData(e);
    });
    getDrink;
  }, []);
  const [open, setOpen] = useState<boolean>(false);
  const [editValue, setEdit] = useState<any | null>(null);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 md:px-20  relative">
      <>
        <div className="w-full h-[70px]  flex justify-between items-center">
          <div className="text-md font-bold">Drink List:</div>
          <Button
            onClick={() => {
              setOpen(!open);
            }}
          >
            Add Drink
          </Button>
        </div>
        <div className="w-full flex-1 overflow-y-auto overflow-x-hidden">
          <div className=" w-full grid-col  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  p-2 bg-blue-50 rounded-md gap-6 m-1">
            {data.map((info, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-[200px] rounded-md shadow-md bg-white p-2 relative"
                >
                  <div
                    className="p-2 bg-white rounded-md shadow-lg absolute z-50 top-0 right-0 cursor-pointer"
                    onClick={() => {
                      setOpen(!open);
                      setEdit(info);
                    }}
                  >
                    <FaEdit />
                  </div>
                  <div className="w-full h-[140px] relative">
                    <Image
                      alt="Upload"
                      src={info.image}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className=" h-[30px] mt-3 px-3 flex justify-center items-center bg-slate-100 rounded-md shadow-sm">
                    <p className=" text-sm font-bold"> {info.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
      {open && (
        <div className="w-[100%] h-full absolute top-0 r-0 bg-black/35 flex justify-center items-center z-50">
          <div className="w-[450px] min-h-[400px] rounded-md shadow-sm px-4 py-3  bg-white ">
            <div className=" w-full h-[40px] flex flex-row justify-end items-center ml-auto">
              <Button
                onClick={() => {
                  setOpen(!open);
                }}
                className="w-[20px] h-[30px] rounded-full"
                variant={"secondary"}
              >
                x
              </Button>
            </div>
            <div className="font-bold text-sm">
              {editValue ? "Edit" : "Add"} Drink:
            </div>
            <hr />
            <FormContainer
              editValue={editValue}
              onClick={() => {
                setOpen(!open);
                getItems();
                setEdit(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Drink;
