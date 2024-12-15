"use server";

import { UserValidator } from "@/schema/validator/user.validator";
import { getUser, register, verifyFaceRegistered } from "@/lib/users";
import { z } from "zod";
import { signIn } from "@/auth";
import { AxiosError } from "axios";

export const registerUser = async (
  request: z.infer<typeof UserValidator.REGISTER_USER>
) => {
  try {
    const validatedRequest = UserValidator.REGISTER_USER.safeParse(request);

    if (!validatedRequest.success) throw new Error("Invalid request");

    delete validatedRequest.data.confirmPassword;

    const response = await register(validatedRequest.data);

    await signIn("credentials", {
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
    });

    return {
      status: "success",
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        status: "error",
        message: error.response?.data.message,
      };
    }
  }
};

export const faceRegistered = async () => {
  try {
    const response = await verifyFaceRegistered();

    if (!response.isFaceRegistered) throw new Error(response.message);

    return {
      status: "success",
      message: response.message,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        status: "error",
        message: error.message,
      };
    }

    return {
      status: "error",
      message: "Failed to verify face registered",
    };
  }
};

export const fetchUser = async () => {
  try {
    const user = await getUser();

    if (!user) {
      throw new Error("Failed to fetch user");
    }

    return user;
  } catch (error) {
    throw error;
  }
};
