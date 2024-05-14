/* trunk-ignore-all(prettier) */
"use client";
import React from "react";
import { TabData } from "@/types/index";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { adminTabs } from "@/config/config";

interface SideBarTabProps {
  isToggles: boolean;
  onMouseOver: Function;
}

const SideBarTabs = (datas: SideBarTabProps) => {
  const { isToggles, onMouseOver } = datas;
  const path = usePathname();

  return (
    <div
      className="w-full h-auto mt-2"
      onMouseDown={onMouseOver()}
      onMouseLeave={onMouseOver()}
    >
      {adminTabs?.map(({ icon: Icon, ...value }, index: number) => {
        return (
          <Link
            key={index}
            style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
            href={value.link}
            className={`w-full flex justify-start items-center  cursor-pointer  mb-1 p-4 rounded-md ${
              path === value.link &&
              "bg-black border-spacing-1 border-2 border-black"
            } ${path !== value.link && "hover:bg-neutral-200 border-b-[1px]"}`}
          >
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <TooltipTrigger className="flex  justify-start items-center mr-4  ">
                  <Icon
                    size={20}
                    className={`${
                      path === value.link ? "text-white" : "text-black"
                    }`}
                  />
                </TooltipTrigger>
                <TooltipContent align="end">
                  <p className="text-black font-bold">{value.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {!isToggles && (
              <p
                className={`${
                  path === value.link ? "text-white" : "text-black"
                } ml-4  font-medium`}
              >
                {value.label}
              </p>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default SideBarTabs;
