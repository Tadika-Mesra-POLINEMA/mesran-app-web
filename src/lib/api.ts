"use server";

import { refreshToken } from "@/actions/auth.action";
import axios from "axios";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const ml = axios.create({
  baseURL: process.env.BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const api = axios.create({
  baseURL: process.env.NEXT_BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const cookie = await cookies();
  const accessToken = cookie.get("accessToken")?.value;

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const cookie = await cookies();
      const refreshTokenKey = cookie.get("refreshToken")?.value;

      if (!refreshTokenKey) {
        return Promise.reject(error);
      }

      const isTokenRefreshed = await refreshToken(refreshTokenKey);

      if (!isTokenRefreshed) {
        redirect("/auth/sign-in");
      }

      return api(originalRequest);
    }

    return Promise.reject(error);
  }
);
