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
import { FaRotate } from "react-icons/fa6";
import { Button } from "../ui/button";
import { getAllFood } from "@/data/food";
import FormContainer from "../menu/form";
import { getAllTiming } from "@/data/timing";
import { getDrink } from "@/data/drink";
import { DialogClose } from "@radix-ui/react-dialog";
import { FaEdit } from "react-icons/fa";
interface props {
  onclick: Function;
  onclick2: Function;

  newData: any[];
}
const MenuList = ({ onclick, newData, onclick2 }: props) => {
  const [data1, setData1] = useState<any[]>([]);

  const [data, setData] = useState<any[]>([]);
  const [loadind, setLoadind] = useState<boolean>(false);
  const [dataTime, setDataTime] = useState<any[]>([]);
  const [dataFood, setDataFood] = useState<any[]>([]);
  const [dataDrink, setDataDrink] = useState<any[]>([]);
  const [date, setDte] = useState<string>(
    `${format(new Date(), "yyyy-MM-dd")}`
  );
  const getItems = () => {
    getAllMenu().then((e: any) => {
      setData(e);
    });
  };
  useEffect(() => {
    setLoadind(true);
    getAllMenu().then((e: any) => {
      setData1(e);
      setData(e.filter((e1: any) => e1.menuDate == date));

      setLoadind(false);
    });
  }, []);
  useEffect(() => {
    setData(data1.filter((e) => e.menuDate == date));
  }, [date, newData]);
  return (
    <div className="w-full h-full   rounded-sm  mt-6 relative px-24">
      <div className="w-full flex justify-between items-center">
        <div className="font-bold text-xl">Explore Our Menu</div>
        <div className="flex w-[300px] justify-evenly items-center">
          {
            <p className="font-bold text-lg">
              {format(new Date(), "yyyy-MM-dd") !== date ? date : "Today"}
            </p>
          }
          <DatePickerDemo
            onChange={(e: any) => {
              if (e) {
                setDte(format(e, "yyyy-MM-dd"));
              } else {
                setDte(format(new Date(), "yyyy-MM-dd"));
              }
              setData(data1.filter((e) => e.menuDate == date));
            }}
          />
          {format(new Date(), "yyyy-MM-dd") !== date && (
            <Button
              className="ml-[4px]"
              onClick={() => {
                setDte(format(new Date(), "yyyy-MM-dd"));
              }}
            >
              <FaRotate />
            </Button>
          )}
        </div>
      </div>

      <div className="w-full h-auto grid grid-cols-1 md:grid:cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 mt-4 ">
        {/* {!date &&
          data.map((info, index) => {
            return (
              <Dialog key={index}>
                <DialogTrigger>
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
                <DialogContent className="w-[400px] md:w-[500px] h-[600px] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{info.name}</DialogTitle>
                  </DialogHeader>
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
          })} */}
        {data.length < 1 && (
          <div className="w-full h-[200px] border  border-1 border-gray-200 shadow-sm  rounded-lg flex justify-center items-center">
            {/* <Dialog>
              <DialogTrigger> */}
            <Button
              onClick={() => {
                onclick();
              }}
            >
              Add a menu
            </Button>
            {/* </DialogTrigger>
              <DialogContent className="w-[400px] md:w-[600px] h-[700px] overflow-y-auto">
                <p>Add Menu :</p> */}
          </div>
        )}
        {date &&
          data.map((info, index) => {
            if (date === info.menuDate) {
              return (
                <Dialog key={index}>
                  <DialogTrigger>
                    <div
                      key={index}
                      className="w-full h-[200px] flex flex-col bg-white justify-center items-center rounded-xl shadow-md  relative cursor-pointer md:hover:-mt-1 duration-300"
                    >
                      <div className="w-full flex-1 relative">
                        <Image
                          alt="Upload"
                          src={info.image}
                          fill
                          className="rounded-xl"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="h-[30px] w-full flex flex-col justify-center items-center ">
                        <p className="text-sm font-bold ">{info.timing}</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="w-[400px] md:w-[600px] h-[700px]">
                    <DialogHeader>
                      <DialogTitle>{info.name}</DialogTitle>{" "}
                      <DialogClose
                        onClick={() => {
                          onclick2(info);
                        }}
                      >
                        <FaEdit />
                      </DialogClose>
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
            }
          })}
        {data.length > 0 && (
          <div className="w-full h-[200px] border  border-1 border-gray-200 shadow-sm  rounded-lg flex justify-center items-center">
            {/* <Dialog>
              <DialogTrigger> */}
            <Button
              onClick={() => {
                onclick();
              }}
            >
              Add a menu
            </Button>
            {/* </DialogTrigger>
              <DialogContent className="w-[400px] md:w-[600px] h-[700px] overflow-y-auto">
                <p>Add Menu :</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuList;
