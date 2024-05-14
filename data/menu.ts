"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

// Verify and get user by email.
export const createMenu = async (data: any) => {
  try {
    console.log(data);
    const incredient = await db.menu.create({
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
export const getAllMenu = async () => {
  const allMenu = await db.menu.findMany();
  revalidatePath("/");
  return allMenu;
};
export const deleteMenu = async (id: string) => {
  const allMenu = await db.menu.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
  return allMenu;
};
export const updateMenu = async (id: any, data: any) => {
  const allMenu = await db.menu.update({
    where: {
      id: id,
    },
    data,
  });
  revalidatePath("/");
  return allMenu;
};
// Verify and get user by email.
