"use server";

import { signIn, signOut } from "@/auth";
import { login, refreshAccessToken, sendOtpVerification } from "@/lib/auth";
import { AuthValidator } from "@/schema/validator/auth.validator";
import { cookies } from "next/headers";
import { z } from "zod";
import { setCookie } from "./cookie.action";

export const loginUser = async (
  request: z.infer<typeof AuthValidator.LOGIN_SCHEMA>
) => {
  try {
    const validatedRequest = AuthValidator.LOGIN_SCHEMA.safeParse(request);

    if (!validatedRequest.success) throw new Error("Invalid request");

    const response = await login(validatedRequest.data);

    if (response.status == "error") throw new Error("Failed to login");

    const key = response.verificationKey;

    const cookie = await cookies();
    cookie.set("verificationKey", key);

    return {
      status: "success",
    };
  } catch {
    return {
      status: "error",
      message: "Gagal login, silahkan coba lagi",
    };
  }
};

export const verifyLogin = async (otp: string) => {
  try {
    const cookie = await cookies();
    const verificationKey = cookie.get("verificationKey");

    const response = await sendOtpVerification({
      otp,
      verificationKey: verificationKey?.value || "",
    });

    const accessToken = response.accessToken;
    const refreshToken = response.refreshToken;

    await signIn("credentials", {
      accessToken,
      refreshToken,
      redirect: false,
    });

    return {
      status: "success",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
    };
  }
};

export const refreshToken = async (refreshToken: string) => {
  try {
    const response = await refreshAccessToken(refreshToken);

    const accessToken = response.accessToken;
    await setCookie("accessToken", accessToken);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const logoutUser = async () => {
  await signOut();

  return {
    status: "success",
  };
};
