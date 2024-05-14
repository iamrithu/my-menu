"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

// Verify and get user by email.
export const createFood = async (data: any) => {
  try {
    console.log(data);
    const food = await db.food.create({
      data,
    });
    console.log(data);
    return {
      success: true,
      message: "Item created successfully!",
      data: food,
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
export const getAllFood = async () => {
  try {
    const allFood = await db.food.findMany();
    revalidatePath("/");
    return allFood;
  } catch (r) {
    return [];
  }
};
export const deleteFood = async (id: string) => {
  const allFood = await db.food.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
  return allFood;
};
export const updateFood = async (id: any, data: any) => {
  const allFood = await db.food.update({
    where: {
      id: id,
    },
    data,
  });
  revalidatePath("/");
  return allFood;
};
// Verify and get user by email.
