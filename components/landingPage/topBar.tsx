import React from "react";
import Logo from "./logo";
import Profile from "./profile";
import Menu from "./menu";
import Nav from "./nav";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa";
import { TabData } from "@/types";

interface props {
  onClick: Function;
}

const TopBar = ({ onClick }: props) => {
  var item: any[] = [
    { id: 1, label: "Menu" },

    { id: 2, label: "Food" },
    { id: 3, label: "Beverages" },
    {
      id: 4,
      label: "Ingredients",
    },
    {
      id: 5,
      label: "Timing",
    },
  ];
  return (
    <div className="w-full h-[50px]  m-1   flex flex-row justify-between items-center shadow-sm ">
      {/* LOG */}
      <Logo />
      {/* NAV ITEM */}
      <Nav />
      <div className="flex justify-center items-center">
        {/* MENU FOR MOBILE */}
        <Menu />
        {/* PROFILE */}
        <div className="flex justify-center items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"outline"} className="mr-4">
                <FaPlus />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="w-full h-full flex flex-col ">
                {item.map((info, index) => {
                  return (
                    <SheetClose key={index}>
                      <div
                        onClick={() => {
                          onClick(info.label);
                        }}
                        key={index}
                        className="w-full cursor-pointer h-[40px] flex justify-start pl-2 items-center rounded-sm hover:shadow-sm text-slate-400 border-1 m-2"
                      >
                        <FaPlus className="mr-2" /> {info.label}
                      </div>
                    </SheetClose>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
