"use client";
import { Button } from "@/components/ui/button";
import { VscSignOut } from "react-icons/vsc";
import { signOut, useSession } from "next-auth/react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Menu from "@/components/menu/menu";
import { DatePickerDemo } from "@/components/datePicker";
import { format } from "date-fns";
import { getAllMenu } from "@/data/menu";
import { getAllFood } from "@/data/food";
import { getAllTiming } from "@/data/timing";
import { getDrink } from "@/data/drink";
import { FaBowlFood } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import Image from "next/image";
import { RiDrinks2Fill } from "react-icons/ri";
import { getAllIncredient } from "@/data/incredient";

const MenuPage = () => {
  const session = useSession();
  const [date, setDte] = useState<string>("");
  const [data, setData] = useState<any[]>([]);
  const [dataTime, setDataTime] = useState<any[]>([]);
  const [dataFood, setDataFood] = useState<any[]>([]);
  const [dataDrink, setDataDrink] = useState<any[]>([]);

  useEffect(() => {
    getAllFood().then((e: any) => {
      setDataFood(e);
    });
    getAllIncredient().then((e: any) => {
      setDataTime(e);
    });
    // getAllTiming().then((e: any) => {
    //   setDataTime(e);
    // });
    getDrink().then((e: any) => {
      setDataDrink(e);
    });
    getAllMenu().then((e: any) => {
      setData(e);
    });
  }, []);
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="h-16 z-40 px-24 flex justify-between items-center">
        <Button variant={"outline"}>My Meals</Button>

        <Popover>
          <PopoverTrigger className="hover:cursor-pointer" draggable={true}>
            <Avatar className="w-[40px] h-[40px]  border-spacing-1 border-2 border-theme">
              <AvatarImage src={"https://github.com/shadcn.png"} />
              <AvatarFallback>
                <p className=" capitalize text-theme font-bold">
                  {session.data?.user?.name[0]}
                </p>
              </AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] h-[250px] flex flex-col justify-start items-center">
            <p className="text-theme font-semibold capitalize">
              {session.data?.user?.name}
            </p>
            <p className="bg-blue-100  text-theme shadow-md p-1 text-sm rounded-sm capitalize">
              User
            </p>
            {/* <Button asChild>
              <Link
                href={"/admin/incredients"}
                className="w-full p-4 rounded-md m-2 mr-4 shadow-md"
              >
                Admin
              </Link> */}
            {/* </Button> */}
            <div className="p-2  border-t mt-10">
              <Button asChild onClick={() => {}}>
                <Link
                  href={"/admin/incredients"}
                  className="bg-black font-bold mb-1"
                >
                  Admin
                </Link>
              </Button>
              <Button
                onClick={() => {
                  signOut();
                }}
                className="bg-black font-bold"
              >
                sign out{" "}
                <span className="ml-2">
                  <VscSignOut size={20} />
                </span>
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="h-[100vh]  bg-white/90 overflow-y-auto ">
        <div className="h-[100vh] w-full flex flex-row justify-center items-center ">
          <div className="bg-blue-500-1 flex-1 flex-col w-full h-full justify-center items-center mt-[200px]">
            <h1 className="p-4 text-3xl bg-black rounded-md shadow-lg  text-white w-3/4 ml-auto mr-auto  flex  flex-row justify-center items-center mb-auto ">
              What we have on our menu?
            </h1>
            <p className="text-black  w-3/4 ml-auto mr-auto mt-[20px] p-[30px] text-xl font-bold">
              we showcase a tantalizing array of meals designed to delight every
              palate. From our featured specialties to everyday favorites, our
              menu is thoughtfully curated to offer something for everyone.
              Whether youre craving hearty mains, savory appetizers, indulgent
              desserts, or refreshing beverages, youll find a diverse selection
              to satisfy your culinary desires.
            </p>
          </div>
          <div className="flex-1 w-full h-[90vh] overflow-y-auto scroll-smooth">
            <DatePickerDemo
              onChange={(e: any) => {
                if (e) {
                  setDte(format(e, "yyyy-MM-dd"));
                } else {
                  setDte("");
                }
              }}
            />
            {!date && (
              <div className=" w-full grid-col  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-2">
                {data.map((info, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full min-h-[300px] flex flex-col justify-center items-center rounded-xl shadow-md bg-black  relative"
                    >
                      <div className="w-full h-[30px] flex justify-center items-center text-white ">
                        {info.name}
                      </div>
                      <div className="flex-1 w-full flex flex-col md:flex-row bg-white">
                        <div className="flex-1 relative p-1 ">
                          <Image
                            alt="Upload"
                            src={info.image}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                          <div className=" h-[30px] mt-3 px-3 flex justify-between z-10 items-center rounded-md shadow-sm absolute bottom-0 left-0">
                            <div className="px-2 mb-1 py-1 bg-black text-white text-sm capitalize font-bold rounded-sm shadow-md">
                              {info.timing} : {info.menuDate}
                            </div>
                          </div>
                        </div>
                        <div className=" w-full flex-row flex md:flex-col md:w-[200px]">
                          <div className="flex-1 w-full h-full flex flex-col ">
                            <div
                              className="text-black
                             font-bold text-sm flex items-center justify-center "
                            >
                              <FaBowlFood /> {info.food}{" "}
                            </div>
                            <div className="flex-1 relative">
                              <Image
                                alt="Upload"
                                src={info.foodImg ?? ""}
                                fill
                                style={{ objectFit: "cover" }}
                              />
                            </div>
                          </div>
                          <div className="flex-1 w-full h-full flex flex-col ">
                            <div className="text-black font-bold text-sm flex items-center justify-center ">
                              <RiDrinks2Fill /> {info.drinks}{" "}
                            </div>
                            <div className="flex-1 relative">
                              <Image
                                alt="Upload"
                                src={info.drinksImg ?? ""}
                                fill
                                style={{ objectFit: "cover" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="w-full h-[140px] relative">
                     
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
                      </div> */}
                    </div>
                  );
                })}
              </div>
            )}
            {date && (
              <div className=" w-full grid-col  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 m-1">
                {data.map((info, index) => {
                  if (date === info.menuDate) {
                    return (
                      <div
                        key={index}
                        className="w-full min-h-[300px] flex flex-col justify-center items-center rounded-xl shadow-md bg-black  relative"
                      >
                        <div className="w-full h-[30px] flex justify-center items-center text-white ">
                          {info.name}
                        </div>
                        <div className="flex-1 w-full flex flex-col md:flex-row bg-white">
                          <div className="flex-1 relative p-1 ">
                            <Image
                              alt="Upload"
                              src={info.image}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                            <div className=" h-[30px] mt-3 px-3 flex justify-between z-10 items-center rounded-md shadow-sm absolute bottom-0 left-0">
                              <div className="px-2 mb-1 py-1 bg-black text-white text-sm capitalize font-bold rounded-sm shadow-md">
                                {info.timing} : {info.menuDate}
                              </div>
                            </div>
                          </div>
                          <div className=" w-full flex-row flex md:flex-col md:w-[200px]">
                            <div className="flex-1 w-full h-full flex flex-col ">
                              <div
                                className="text-black
                             font-bold text-sm flex items-center justify-center "
                              >
                                <FaBowlFood /> {info.food}{" "}
                              </div>
                              <div className="flex-1 relative">
                                <Image
                                  alt="Upload"
                                  src={info.foodImg ?? ""}
                                  fill
                                  style={{ objectFit: "cover" }}
                                />
                              </div>
                            </div>
                            <div className="flex-1 w-full h-full flex flex-col ">
                              <div className="text-black font-bold text-sm flex items-center justify-center ">
                                <RiDrinks2Fill /> {info.drinks}{" "}
                              </div>
                              <div className="flex-1 relative">
                                <Image
                                  alt="Upload"
                                  src={info.drinksImg ?? ""}
                                  fill
                                  style={{ objectFit: "cover" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="w-full h-[140px] relative">
                     
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
                      </div> */}
                      </div>
                    );
                  }
                })}
              </div>
            )}
          </div>
        </div>
        <div className="w-full h-auto px-20">
          <div className=" w-full flex flex-row items-center justify-center font-bold text-xl mb-[50px] ">
            <div className="p-2 bg-black rounded-md shadow-sm text-white">
              What types of foo can we serve?{" "}
            </div>
          </div>
          <div className="w-full h-auto flex flex-row flex-grow justify-start items-center overflow-x-auto relative">
            {dataFood.map((info, index) => {
              return (
                <div
                  key={index}
                  className="w-[250px] flex-shrink-0 h-[300px] flex flex-col bg-white rounded-md shadow-md m-2 mr-4"
                >
                  <div className="w-full h-[30px] flex justify-center items-center font-bold text-lg">
                    {info.name}
                  </div>
                  <div className="w-full flex-1 relative">
                    <Image
                      alt="Upload"
                      src={info.image}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  {info.incredient && (
                    <div className="w-full h-auto p-2">
                      <p className="text-md underline font-bold ">
                        Ingredients :{" "}
                      </p>
                      <p className="text-sm text-gray-600">{info.incredient}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full h-[200px]"></div>

        <div className="w-full h-auto px-20">
          <div className=" w-full flex flex-row items-center justify-center font-bold text-xl mb-[50px] ">
            <div className="p-2 bg-black rounded-md shadow-sm text-white">
              What types of beverages can we serve?{" "}
            </div>
          </div>
          <div className="w-full h-auto flex flex-row flex-grow justify-start items-center overflow-x-auto relative">
            {dataDrink.map((info, index) => {
              return (
                <div
                  key={index}
                  className="w-[250px] flex-shrink-0 h-[300px] flex flex-col bg-white rounded-md shadow-md m-2 mr-4"
                >
                  <div className="w-full h-[30px] flex justify-center items-center font-bold text-lg">
                    {info.name}
                  </div>
                  <div className="w-full flex-1 relative">
                    <Image
                      alt="Upload"
                      className="rounded-md"
                      src={info.image}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full h-[200px]"></div>
        <div className="w-full h-auto px-20">
          <div className=" w-full flex flex-row items-center justify-center font-bold text-xl mb-[50px] ">
            <div className="p-2 bg-black rounded-md shadow-sm text-white">
              Our most used ingredient{" "}
            </div>
          </div>
          <div className="w-full h-auto flex flex-row flex-grow justify-start items-center overflow-x-auto relative">
            {dataTime.map((info, index) => {
              return (
                <div
                  key={index}
                  className="w-[250px] flex-shrink-0 h-[300px] flex flex-col bg-white rounded-md shadow-md m-2 mr-4"
                >
                  <div className="w-full h-[30px] flex justify-center items-center font-bold text-lg">
                    {info.name}
                  </div>
                  <div className="w-full flex-1 relative">
                    <Image
                      alt="Upload"
                      className="rounded-md"
                      src={info.image}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full h-[200px]"></div>
      </div>
    </div>
  );
};

export default MenuPage;
