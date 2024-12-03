"use server";

import { z } from "zod";
import { predict, storeFace, userById } from "@/lib/ml";
import { FaceRegisterSchema } from "@/schema/face-registration";
import { VerifyFaceSchema } from "@/schema/verify-page";

export const registerFace = async (
  schema: z.infer<typeof FaceRegisterSchema>
) => {
  try {
    const validatedPayload = await FaceRegisterSchema.safeParseAsync(schema);

    if (!validatedPayload.success) {
      throw new Error(validatedPayload.error.errors[0].message);
    }

    const blob = await fetch(schema.image).then((res) => res.blob());

    const response = await storeFace({ image: blob });

    return response;
  } catch (error) {
    console.log(error);
    // TODO: Handling Error
  }
};

export const predictFace = async (schema: z.infer<typeof VerifyFaceSchema>) => {
  try {
    const validatedPayload = await VerifyFaceSchema.safeParseAsync(schema);

    if (!validatedPayload.success) {
      throw new Error(validatedPayload.error.errors[0].message);
    }

    const blob = await fetch(schema.image).then((res) => res.blob());

    const response = await predict({ image: blob });
    return response.user_id;
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (id: string) => {
  try {
    const response = await userById(id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
