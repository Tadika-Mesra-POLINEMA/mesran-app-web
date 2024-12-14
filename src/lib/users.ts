"use server";

import { z } from "zod";
import { api } from "@/lib/api";
import { UserValidator } from "@/schema/validator/user.validator";
import { AxiosError } from "axios";
import { VerifyFaceResponse } from "./__types__/user.types";
import { User } from "@/types";

export const register = async (
  request: z.infer<typeof UserValidator.REGISTER_USER>
) => {
  try {
    const response = await api.post("/api/users", request);

    if (response.status != 201) throw new Error("Failed to register user");

    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const verifyFaceRegistered = async (): Promise<VerifyFaceResponse> => {
  try {
    const response = await api.get("/api/users/me");

    if (response.status != 200)
      throw new Error("Failed to verify face registered");

    return {
      status: "success",
      message: "Face registered",
      isFaceRegistered: response.data.data.is_face_registered,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        status: "error",
        message: error.response?.data,
      };
    }

    return {
      status: "error",
      message: "Failed to verify face registered",
    };
  }
};

export const getUser = async (): Promise<User> => {
  try {
    const response = await api.get("/api/users/me");

    if (response.status != 200) throw new Error("Failed to fetch user");

    return response.data.data;
  } catch (error) {
    throw error;
  }
};
