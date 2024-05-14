import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});
export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "User name is required" }),
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Minimum 6 characters is required" }),
});
export const IncredientSchema = z.object({
  name: z.string().min(1, { message: "Enter any name for your incredient" }),
  image: z.string().optional(),
});
export const DrinkSchema = z.object({
  name: z.string().min(1, { message: "Enter any name for your incredient" }),
  image: z.string().optional(),
});
export const TimingSchema = z.object({
  name: z.string().min(1, { message: "Enter any name for your incredient" }),
  timing: z.string().optional(),
});
export const FoodSchema = z.object({
  name: z.string().min(1, { message: "Enter any name for your food" }),
  image: z.string().optional(),
  description: z.string().optional(),
  incredient: z.string().optional(),
});
export const MenuSchema = z.object({
  name: z.string().min(1, { message: "Enter any name for your food" }),
  image: z.string().optional(),
  drinks: z.string().optional(),
  timing: z.string().optional(),
  food: z.string().optional(),
  menuDate: z.string().optional(),
  drinksImg: z.string().optional(),
  foodImg: z.string().optional(),
});
