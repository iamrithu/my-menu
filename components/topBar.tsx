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
import { FaHome, FaSignOutAlt, FaUserCircle, FaUserCog } from "react-icons/fa";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdMenu } from "react-icons/md";
import SideBar from "./sidebar";
import SideBarTabs from "./sidebar-tabs";
import classNames from "classnames";

const TopBar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const wrapperClasses = classNames(
    "h-screen px-4 pt-2 pb-4 bg-new hidden justify-start flex-col lg:flex overflow-auto ",
    {
      ["w-80"]: !toggleCollapse,
      "w-[85px]": toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-theme absolute right-0 hover:bg-secondary",
    {
      "rotate-180": toggleCollapse,
      "rotate-0": !toggleCollapse,
    }
  );

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };
  useEffect(() => {
    console.log("rithi");
  }, []);
  const session = useSession();
  return (
    <div className="h-16 z-40 px-24 flex justify-end items-center bg-white">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="p-3 block md:hidden shadow-sm hover:text-white bg-white text-black hover:bg-black rounded-md">
            <MdMenu scale={40} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full h-full">
          <SideBarTabs
            isToggles={toggleCollapse}
            onMouseOver={() => setIsCollapsible(isCollapsible)}
          />
        </DropdownMenuContent>
      </DropdownMenu>

      <Popover>
        <PopoverTrigger>
          <div className="p-3 shadow-sm hover:text-white bg-white text-black hover:bg-black rounded-md">
            <FaUserCircle scale={40} />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[200px]">
          <Link href={"/"}>
            <Button className="w-full">
              Home <FaHome className="ml-2" />
            </Button>
          </Link>
          <hr />
          <Button
            className="w-full"
            onClick={() => {
              signOut();
            }}
          >
            Sign Out <FaSignOutAlt className="ml-2" />
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TopBar;
