"use server"

import { LoginSchema } from "@/schemas";

export const login = (values: typeof LoginSchema) => {
   console.log(values)
}