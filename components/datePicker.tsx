"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface props {
  onChange: Function;
}
export function DatePickerDemo({ onChange }: props) {
  const [date, setDate] = React.useState<Date>(new Date());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="h-4 w-4" />
          {/* {date ? (
            date == new Date() ? (
              "Today"
            ) : (
              format(date, "PPP")
            )
          ) : (
            <span>Pick a date</span>
          )} */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(e: any) => {
            console.log(e);
            setDate((d) => e);
            onChange(e);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
