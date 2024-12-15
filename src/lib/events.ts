"use server";

import { Invitation } from "@/types";
import { api } from "./api";

export const invitationDetail = async (
  eventId: string
): Promise<Invitation> => {
  try {
    const response = await api.get(`/api/events/${eventId}/invitation`);

    return response.data.data;
  } catch (error) {
    throw error;
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
