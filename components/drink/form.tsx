"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DrinkSchema } from "@/schemas";

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
import { createDrink, updateDrink, deleteDrink } from "@/data/drink";
import { useEffect } from "react";

interface FormContainerProps {
  editValue: any;
  onClick: Function;
}
const FormContainer = ({ onClick, editValue }: FormContainerProps) => {
  const form = useForm<z.infer<typeof DrinkSchema>>({
    resolver: zodResolver(DrinkSchema),
    defaultValues: {
      name: "",
      image: "",
    },
  });

  useEffect(() => {
    if (editValue) {
      form.setValue("name", editValue.name);
      form.setValue("image", editValue.image);
    }
  }, [editValue]);

  const onSubmit = async (values: z.infer<typeof DrinkSchema>) => {
    // var data = await createDrink(values);
    // onClick();
    // console.log(data);
    // createDrink(values)
    //   .then((e) => {
    //     console.log(e);
    //     +toast.success(e.message, {
    //       position: "top-right",
    //       dismissible: true,
    //     });
    //     onClick();
    //   })
    //   .catch((e) => {
    //     toast.error(e.message, {
    //       position: "top-right",
    //       dismissible: true,
    //     });
    //   });
    if (editValue) {
      updateDrink(editValue.id, values)
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
    createDrink(values)
      .then((e) => {
        console.log(e);
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
                    <div className="w-full h-[150px]">
                      <ImageUpload
                        value={form.getValues("image")}
                        onChange={(e) => {
                          form.setValue("image", e);
                        }}
                      />
                    </div>
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
                  deleteDrink(editValue.id)
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
              {editValue ? "Save" : "Create"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default FormContainer;
