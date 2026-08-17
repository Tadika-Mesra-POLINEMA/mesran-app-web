"use server";

import { Invitation } from "@/types";
import { api } from "./api";

export const invitationDetail = async (
  eventId: string
): Promise<Invitation | null> => {
  try {
    const response = await api.get(`/api/events/${eventId}`);

    return response.data?.data?.event || response.data?.data;
  } catch {
    return null;
  }
};

export const acceptInvitation = async (eventId: string) => {
  try {
    const response = await api.post(`/api/events/${eventId}/participants/join`);

    if (response.status !== 201) throw new Error("Failed to accept invitation");

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
