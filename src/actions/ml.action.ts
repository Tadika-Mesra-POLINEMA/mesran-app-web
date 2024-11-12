"use server";

import { z } from "zod";
import { storeFace } from "@/lib/ml";
import { FaceRegisterSchema } from "@/schema/face-registration";

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
