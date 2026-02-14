"use server";

import { Connectdb } from "@/lib/Connectdb";
import bcrypt from "bcryptjs";

export const registerUser = async (formdata) => {

  const isExist = await Connectdb("users").findOne({ email: formdata.email });

  if (isExist) {
    return { success: false, message: "User already exists" };
  }

  const hashedPassword = await bcrypt.hash(formdata.password, 10);

  const newUser = {
    ...formdata,
    password: hashedPassword,
    createdAt: new Date().toISOString(),
  };

  const result = await Connectdb("users").insertOne(newUser);  

  // Convert insertedId to string before returning
  const safeResult = {
    ...result,
    insertedId: result.insertedId.toString(),
  };
  

  return { success: true, message: "User registered successfully", data: safeResult };
};
