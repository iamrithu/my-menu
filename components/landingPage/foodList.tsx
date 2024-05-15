"use client";
import { getAllMenu } from "@/data/menu";
import React, { useEffect, useState } from "react";
import { DatePickerDemo } from "../datePicker";
import { format } from "date-fns";
import Image from "next/image";
import { getAllFood } from "@/data/food";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";

const FoodList = () => {
  const [data, setData] = useState<any[]>([]);
  const [date, setDte] = useState<string>("");
  useEffect(() => {
    getAllFood().then((e: any) => {
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
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {data.map((info, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/15 lg:basis-1/5"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="w-full h-full relative">
                      <div className="w-full h-[250px]  md:h-[150px]  relative">
                        <Image
                          alt="Upload"
                          src={info.image}
                          fill
                          className="rounded-xl"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="w-full h-[25px] flex justify-center items-center">
                        <p className="text-sm font-bold text-blue-600">
                          {info.name}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* {date &&
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
          })} */}
    </div>
  );
};

export default FoodList;
