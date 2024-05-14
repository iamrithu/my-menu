"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MenuSchema } from "@/schemas";

import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { register } from "@/action/register";
import { toast } from "sonner";
import { login } from "@/action/login";
import ImageUpload from "../imageUpload";
import { createMenu, deleteMenu, updateMenu } from "@/data/menu";
import { useEffect } from "react";
import { format } from "date-fns";
import TimingDropDown from "../timingDropDown";
import DropDown from "../timingDropDown";

interface FormContainerProps {
  editValue: any;
  dataFood: any;
  dataDrink: any;
  dataTime: any;
  onClick: Function;
}
const FormContainer = ({
  onClick,
  editValue,
  dataDrink,
  dataFood,
  dataTime,
}: FormContainerProps) => {
  const form = useForm<z.infer<typeof MenuSchema>>({
    resolver: zodResolver(MenuSchema),
    defaultValues: {
      name: "",
      image: "",
      drinks: "",
      food: "",
      foodImg: "",
      drinksImg: "",
      timing: "",
    },
  });

  useEffect(() => {
    if (editValue) {
      form.setValue("name", editValue.name);
      form.setValue("image", editValue.image);
      form.setValue("drinks", editValue.drinks);
      form.setValue("drinksImg", editValue.drinksImg);
      form.setValue("timing", editValue.timing);
      form.setValue("menuDate", editValue.menuDate);
      form.setValue("food", editValue.food);
      form.setValue("foodImg", editValue.foodImg);
    }
  }, [editValue]);

  const onSubmit = (values: z.infer<typeof MenuSchema>) => {
    console.log(values);
    if (editValue) {
      updateMenu(editValue.id, values)
        .then((e) => {
          console.log(e);
          toast.success("updated", {
            position: "top-right",
            dismissible: true,
          });
          onClick();
        })
        .catch((e) => {
          toast.error(e.message, {
            position: "top-right",
            dismissible: true,
          });
        });
      onClick();
      return;
    }
    createMenu(values)
      .then((e) => {
        toast.success(e.message, {
          position: "top-right",
          dismissible: true,
        });
        onClick();
      })
      .catch((e) => {
        toast.error(e.message, {
          position: "top-right",
          dismissible: true,
        });
      });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <div className="w-full h-[100px]">
                      <ImageUpload
                        value={form.getValues("image")}
                        onChange={(e) => {
                          form.setValue("image", e);
                          console.log(e);
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="timing"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Timing</FormLabel>
                  <FormControl>
                    <DropDown
                      value={form.watch("timing")!}
                      onClick={(e: any) => {
                        console.log(e);
                        form.setValue("timing", e[0].name);
                      }}
                      data={dataTime}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="food"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Foods</FormLabel>
                  <FormControl>
                    <DropDown
                      value={form.watch("food")!}
                      onClick={(e: any) => {
                        console.log(e);
                        form.setValue("food", e[0].name);
                        form.setValue("foodImg", e[0].image);
                      }}
                      data={dataFood}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="drinks"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Drink</FormLabel>
                  <FormControl>
                    <DropDown
                      value={form.watch("drinks")!}
                      onClick={(e: any) => {
                        console.log(e);
                        form.setValue("drinks", e[0].name);
                        form.setValue("drinksImg", e[0].image);
                      }}
                      data={dataDrink}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="menuDate"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="date"
                      placeholder=""
                      value={form.watch("menuDate")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <div className="w-full flex h-auto gap-x-2">
            {editValue && (
              <Button
                className="flex-1"
                variant={"destructive"}
                onClick={() => {
                  deleteMenu(editValue.id)
                    .then((e) => {
                      console.log(e);
                      toast.success("Deleted", {
                        position: "top-right",
                        dismissible: true,
                      });
                      onClick();
                    })
                    .catch((e) => {
                      toast.error(e.message, {
                        position: "top-right",
                        dismissible: true,
                      });
                    });
                  onClick();
                }}
              >
                Delete
              </Button>
            )}
            <Button type="submit" className="flex-1">
              {editValue ? "Edit" : "Create"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default FormContainer;
