"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

// Verify and get user by email.
export const createTiming = async (data: any) => {
  try {
    console.log(data);
    const incredient = await db.timing.create({
      data,
    });
    console.log(data);
    return {
      success: true,
      message: "Item created successfully!",
      data: incredient,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something Went Wrong",
      data: "",
    };
  }
};
export const getAllTiming = async () => {
  const allTiming = await db.timing.findMany();
  revalidatePath("/");
  return allTiming;
};
export const deleteTiming = async (id: string) => {
  const allTiming = await db.timing.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
  return allTiming;
};
export const updateTiming = async (id: any, data: any) => {
  const allTiming = await db.timing.update({
    where: {
      id: id,
    },
    data,
  });
  revalidatePath("/");
  return allTiming;
};
// Verify and get user by email.
