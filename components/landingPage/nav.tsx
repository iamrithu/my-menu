import { TabData } from "@/types";
import Link from "next/link";
import React from "react";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { FaBowlFood, FaUsers } from "react-icons/fa6";
import { GiThermometerScale } from "react-icons/gi";
import { MdAccessAlarms } from "react-icons/md";
import { RiDrinks2Fill } from "react-icons/ri";

const Nav = () => {
  var item: TabData[] = [
    { id: 2, label: "Food", icon: FaBowlFood, link: "#food" },
    { id: 2, label: "Beverages", icon: RiDrinks2Fill, link: "#beverages" },
    {
      id: 1,
      label: "Ingredients",
      icon: GiThermometerScale,
      link: "#ingredients",
    },
    {
      id: 1,
      label: "About",
      icon: FaUsers,
      link: "#about",
    },
  ];
  var data = [
    { name: "Food Items", href: "#food" },
    { name: "Beverages", href: "#food" },
    { name: "Ingredients", href: "#ingredients" },
    ,
  ];
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-1 px-3 cursor-pointer hidden md:flex bg-slate-50 rounded-sm  border-l-2 border-black hover:border-slate-500 mr-4 justify-center items-center ">
        <BsMenuButtonWideFill className="mr-3" scale={10} mt-1 />

        <Link href={"#menu"}>
          <p className="text-sm font-bold first-letter:capitalize ">Menu</p>{" "}
        </Link>
      </div>
      {item.map((info, index) => {
        return (
          <div
            key={index}
            className="p-1 px-3 cursor-pointer hidden md:flex bg-slate-200 rounded-sm  hover:border-l-2  hover:border-slate-500 mr-4 justify-center items-center "
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
    </div>
  );
};

export default Nav;
