"use server";

import { z } from "zod";
import { storeFaces, validateFace } from "@/lib/ml";
import {
  FaceRegisterSchema,
  FaceRegisterSingleImageSchema,
} from "@/schema/face-registration";

export const registerFace = async (
  payload: z.infer<typeof FaceRegisterSchema>
) => {
  try {
    const validatedPayload = await FaceRegisterSchema.safeParseAsync(payload);

    if (!validatedPayload.success) {
      throw new Error(validatedPayload.error.errors[0].message);
    }

    const faces = await Promise.all(
      validatedPayload.data.images.map(async (image) => {
        return await fetch(image).then((res) => res.blob());
      })
    );

    const response = await storeFaces({ faces });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const verifyFace = async (
  payload: z.infer<typeof FaceRegisterSingleImageSchema>
) => {
  try {
    const validatedPayload = await FaceRegisterSingleImageSchema.safeParseAsync(
      payload
    );

    if (!validatedPayload.success) {
      throw new Error(validatedPayload.error.errors[0].message);
    }

    const face = await fetch(payload.image).then((res) => res.blob());

    const isFaceValidated = await validateFace({ face });

    if (!isFaceValidated) {
      throw new Error("Failed to verify face registered");
    }

    return isFaceValidated;
  } catch (error) {
    console.log(error);
  }
};
