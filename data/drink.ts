"use server";

import { db } from "@/lib/db";

export const createDrink = async (data: any) => {
  try {
    const incredient = await db.drink.create({
      data,
    });
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
export const deleteDrink = async (id: any) => {
  const allIncredient = await db.drink.delete({
    where: {
      id: id,
    },
  });
  return allIncredient;
};
export const updateDrink = async (id: any, data: any) => {
  const allIncredient = await db.drink.update({
    where: {
      id: id,
    },
    data,
  });
  return allIncredient;
};
export const getDrink = async () => {
  try {
    const incredient = await db.drink.findMany();
    return incredient;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something Went Wrong",
      data: "",
    };
  }
};
