"use client";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";

const Profile = () => {
  const session = useSession();
  return (
    <Popover>
      <PopoverTrigger>
        <div className="p-3 shadow-sm hidden md:block hover:text-white bg-white text-black hover:bg-black rounded-md">
          <FaUserCircle scale={40} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[200px]">
        <Link href={"/admin/incredients"}>
          <Button className="w-full">
            Dashboard <FaUserCog className="ml-2" />
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
  );
};

export default Profile;
