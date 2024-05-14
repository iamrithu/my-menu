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

const page = () => {
  const router = useRouter();
  useEffect(() => {}, []);
  const session = useSession();
  const [date, setDte] = useState<string>("");
  return (
    <div className="w-full h-full">
      <div className="h-16 z-40 px-24 flex justify-between items-center">
        <Button variant={"outline"}>My Meals</Button>
        <DatePickerDemo
          onChange={(e: any) => {
            if (e) {
              setDte(format(e, "yyyy-MM-dd"));
            } else {
              setDte("");
            }
          }}
        />
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
              {session.data?.user?.role}
            </p>
            <Button asChild>
              <Link
                href={"/admin/incredients"}
                className="w-full p-4 rounded-md m-2 shadow-md"
              >
                Admin
              </Link>
            </Button>
            <div className="p-2  border-t mt-10">
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
      <div className="h-[calc(100vh-4rem)] flex flex-col overflow-y-auto bg-slate-100 ">
        <Menu home date={date} />
      </div>
    </div>
  );
};

export default page;
