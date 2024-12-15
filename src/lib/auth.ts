"use server";

import { AuthValidator } from "@/schema/validator/auth.validator";
import { z } from "zod";
import { api } from "./api";
import { VerificationLoginRequest } from "@/types/request";

export const login = async (
  request: z.infer<typeof AuthValidator.LOGIN_SCHEMA>
) => {
  try {
    const response = await api.post("/api/authentications", request);

    console.log("RESPONSE FROM SERVER", response);

    if (response.status != 200) throw new Error("Failed to login");

    return response.data.data;
  } catch {
    return {
      status: "error",
    };
  }
};

export const sendOtpVerification = async ({
  verificationKey,
  otp,
}: VerificationLoginRequest) => {
  try {
    const response = await api.post("/api/authentications/verify-login", {
      verificationKey,
      otp,
    });

    if (response.status != 200) throw new Error("Failed to send OTP");

    return response.data.data;
  } catch {
    return {
      status: "error",
    };
  }
};

export const refreshAccessToken = async (refreshToken: string) => {
  try {
    const response = await api.put("/api/authentications/refresh", {
      refreshToken,
    });

    if (response.status != 200) throw new Error("Failed to refresh token");

    return response.data.data;
  } catch {
    return {
      status: "error",
    };
  }
};
