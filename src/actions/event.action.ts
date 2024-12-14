"use server";

import { acceptInvitation } from "@/lib/events";
import { AxiosError } from "axios";

export const joinEvent = async (eventId: string) => {
  try {
    const response = await acceptInvitation(eventId);

    if (!response) throw new Error("Failed to join event");

    return {
      status: "success",
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        return {
          status: "error",
          message: "Event tidak ditemukan",
        };
      }

      if (error.response?.status === 400) {
        return {
          status: "error",
          message: "Kamu sudah bergabung dalam event ini",
        };
      }
    }

    throw error;
  }
};
