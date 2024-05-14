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
import { RiDrinks2Fill } from "react-icons/ri";
import { FaBowlFood } from "react-icons/fa6";
import { Button } from "../ui/button";
import FormContainer from "./form";
import { getAllMenu } from "@/data/menu";
import { FaEdit } from "react-icons/fa";
import { getAllTiming } from "@/data/timing";
import { getAllFood } from "@/data/food";
import { getDrink } from "@/data/drink";

interface props {
  home?: boolean;
  date?: string;
}
const Menu = ({ home, date }: props) => {
  const [data, setData] = useState<any[]>([]);
  const [dataTime, setDataTime] = useState<any[]>([]);
  const [dataFood, setDataFood] = useState<any[]>([]);
  const [dataDrink, setDataDrink] = useState<any[]>([]);

  const getItems = () => {
    getAllMenu().then((e: any) => {
      setData(e);
    });
  };
  useEffect(() => {
    getAllFood().then((e: any) => {
      setDataFood(e);
    });
    getAllTiming().then((e: any) => {
      setDataTime(e);
    });
    getDrink().then((e: any) => {
      setDataDrink(e);
    });
    getAllMenu().then((e: any) => {
      setData(e);
    });
    getItems();
  }, []);
  const [open, setOpen] = useState<boolean>(false);
  const [editValue, setEdit] = useState<any | null>(null);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-20 relative">
      <>
        {!home && (
          <div className="w-full h-[70px]  flex justify-between items-center">
            <div className="text-md font-bold">Menu List:</div>
            <Button
              onClick={() => {
                setOpen(!open);
              }}
            >
              Add Menu
            </Button>
          </div>
        )}

        <div className="w-full flex-1 ">
          {!date && (
            <div className=" w-full grid-col  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 m-1">
              {data.map((info, index) => {
                return (
                  <div
                    key={index}
                    className="w-full auto rounded-md shadow-md bg-white p-2 relative"
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
                    <div className=" h-[30px] mt-3 px-3 flex justify-between items-center rounded-md shadow-sm">
                      <div className="px-2 mb-1 py-1 bg-black text-white text-sm capitalize font-bold rounded-sm shadow-md">
                        {info.timing}
                        <span className="ml-2 p-1 bg-red-500 text-white">
                          {" "}
                          {info.menuDate}
                        </span>
                      </div>
                    </div>
                    <div className="w-full relative flex justify-start px-4 items-center">
                      <div className="">
                        <Image
                          className="rounded-md shadow-md"
                          alt="Upload"
                          src={info.foodImg}
                          width={100}
                          height={100}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-red-600 font-bold text-sm flex items-center justify-center relative ">
                        <FaBowlFood /> {info.food}{" "}
                      </div>
                    </div>
                    <div className="w-full relative flex justify-start px-4 my-1 items-center">
                      <div className="">
                        <Image
                          className="rounded-md shadow-md"
                          alt="Upload"
                          src={info.drinksImg ?? ""}
                          width={100}
                          height={100}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-red-600 font-bold text-sm flex items-center justify-center relative ">
                        <RiDrinks2Fill /> {info.drinks}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {date && (
            <div className=" w-full grid-col  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 m-1">
              {data.map((info, index) => {
                if (date === info.menuDate) {
                  return (
                    <div
                      key={index}
                      className="w-full auto rounded-md shadow-md bg-white p-2 relative"
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
                      <div className=" h-[30px] mt-3 px-3 flex justify-between items-center rounded-md shadow-sm">
                        <div className="px-2 mb-1 py-1 bg-black text-white text-sm capitalize font-bold rounded-sm shadow-md">
                          {info.timing}
                        </div>
                        {info.menuDate}
                      </div>
                      <div className="w-full relative flex justify-start px-4 items-center">
                        <div className="">
                          <Image
                            className="rounded-md shadow-md"
                            alt="Upload"
                            src={info.foodImg}
                            width={100}
                            height={100}
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="text-red-600 font-bold text-sm flex items-center justify-center relative ">
                          <FaBowlFood /> {info.food}{" "}
                        </div>
                      </div>
                      <div className="w-full relative flex justify-start px-4 my-1 items-center">
                        <div className="">
                          <Image
                            className="rounded-md shadow-md"
                            alt="Upload"
                            src={info.drinksImg ?? ""}
                            width={100}
                            height={100}
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="text-red-600 font-bold text-sm flex items-center justify-center relative ">
                          <RiDrinks2Fill /> {info.drinks}
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
      </>
      {open && (
        <div className="w-[100%] h-full absolute top-0 r-0 bg-black/35 flex flex-col  justify-center items-center z-50">
          <div className="w-[450px] h-[400px] rounded-md shadow-sm px-4 py-3  bg-white overflow-y-auto ">
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
              {editValue ? "Edit" : "Add"} Menu:
            </div>
            <hr />
            <FormContainer
              editValue={editValue}
              dataTime={dataTime}
              dataDrink={dataDrink}
              dataFood={dataFood}
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

export default Menu;
