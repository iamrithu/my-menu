import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Nav from "./nav";
import { BsMenuButtonWideFill } from "react-icons/bs";
import Link from "next/link";
import { GiThermometerScale } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { RiDrinks2Fill } from "react-icons/ri";
import { TabData } from "@/types";
const Menu = () => {
  var item: TabData[] = [
    { id: 2, label: "Food", icon: FaBowlFood, link: "#food" },
    { id: 2, label: "Beverages", icon: RiDrinks2Fill, link: "#beverages" },
    {
      id: 1,
      label: "Ingredients",
      icon: GiThermometerScale,
      link: "#ingredients",
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="p-3 block md:hidden shadow-sm hover:text-white bg-white text-black hover:bg-black rounded-md">
          <MdMenu scale={40} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="p-4 px-3 cursor-pointer flex flex-row bg-slate-50 rounded-sm  mb-2 border-l-2 border-black hover:border-slate-500 mr-4 justify-center items-center ">
          <BsMenuButtonWideFill className="mr-3" scale={10} mt-1 />

          <Link href={"#menu"}>
            <p className="text-sm font-bold first-letter:capitalize ">Menu</p>{" "}
          </Link>
        </div>
        {item.map((info, index) => {
          return (
            <div
              key={index}
              className="p-1 px-3 cursor-pointer  bg-slate-200 mb-2 rounded-sm  hover:border-l-2  hover:border-slate-500 mr-4 justify-center items-center "
            >
              <info.icon className="mr-3" scale={10} mt-1 />

              <Link href={info.link}>
                <p className="text-sm font-bold first-letter:capitalize ">
                  {info.label}
                </p>
              </Link>
            </div>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
