"use server";

import axios from "axios";

export const createInstance = axios.create({
  baseURL: process.env.BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
