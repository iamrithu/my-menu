"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

// Verify and get user by email.
export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    return null;
  }
};
// Verify and get user by email.
export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    return [];
  }
};
export const getAlluser = async () => {
  const allIncredient = await db.user.findMany();
  revalidatePath("/");
  return allIncredient;
};
