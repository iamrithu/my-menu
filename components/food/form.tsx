"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FoodSchema } from "@/schemas";

import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { register } from "@/action/register";
import { toast } from "sonner";
import { login } from "@/action/login";
import ImageUpload from "../imageUpload";
import { createFood, deleteFood, updateFood } from "@/data/food";
import { useEffect } from "react";
import SelectIncredient from "../selectIncredient";
import { DatePickerDemo } from "../datePicker";

interface FormContainerProps {
  inc: any;
  editValue: any;
  onClick: Function;
}
const FormContainer = ({ onClick, editValue, inc }: FormContainerProps) => {
  const form = useForm<z.infer<typeof FoodSchema>>({
    resolver: zodResolver(FoodSchema),
    defaultValues: {
      name: "",
      image: "",
      description: "",
      incredient: "",
    },
  });

  useEffect(() => {
    if (editValue) {
      form.setValue("name", editValue.name);
      form.setValue("image", editValue.image);
      form.setValue("description", editValue.description);
      form.setValue("incredient", editValue.incredient);
    }
  }, [editValue]);

  const onSubmit = (values: z.infer<typeof FoodSchema>) => {
    if (editValue) {
      updateFood(editValue.id, values)
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
    createFood(values)
      .then((e) => {
        console.log(e);
        toast.success(e.message, {
          position: "top-right",
          dismissible: true,
        });
        onClick();
      })
      .catch((e) => {
        //     toast.error(e.message, {
        //       position: "top-right",
        //       dismissible: true,
        //     });
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
          {/* <FormField
            control={form.control}
            name="date"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <div className="w-full">
                      <DatePickerDemo
                        onChange={(e: any) => {
                          console.log(e);
                          form.setValue("date", `${e}`);
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          /> */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Description</FormLabel>
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
            name="incredient"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Ingredients</FormLabel>
                  <FormControl>
                    <SelectIncredient
                      val={form.watch("incredient") as string}
                      inc={inc}
                      onClick={(e: string[]) => {
                        form.setValue("incredient", e.join(","));
                      }}
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
                  deleteFood(editValue.id)
                    .then((e: any) => {
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
