"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  console.log(validatedFields);
  if (!validatedFields.success) {
    return { error: "User not found" };
  }
  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return {
      success: false,
      message: "Email already exist !",
      data: "",
    };
  }
  const payload = {
    name,
    email,
    password: hashedPassword,
  };
  const user=await db.user.create({
    data: payload,
  });
  if(!user){
    return {
      success: false,
      message: "Something Went Wrong",
      data: "",
    };
  }

  return {
    success: true,
    message: "User Created Successfully",
    data: user,
  };
};
