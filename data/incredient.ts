"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

// Verify and get user by email.
export const createIncredient = async (data: any) => {
  try {
    const incredient = await db.incredient.create({
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
export const getAllIncredient = async () => {
  const allIncredient = await db.incredient.findMany();
  revalidatePath("/");
  return allIncredient;
};
export const deleteIncredient = async (id: string) => {
  const allIncredient = await db.incredient.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
  return allIncredient;
};
export const updateIncredient = async (id: any, data: any) => {
  const allIncredient = await db.incredient.update({
    where: {
      id: id,
    },
    data,
  });
  revalidatePath("/");
  return allIncredient;
};
// Verify and get user by email.
