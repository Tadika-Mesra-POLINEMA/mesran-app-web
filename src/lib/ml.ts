"use server";

import { createInstance } from "@/lib/api";

export const storeFace = async (schema: { image: Blob }) => {
  try {
    const formData = new FormData();

    formData.append("user_id", "kelompok_tiga");
    formData.append("face", schema.image, "face_image.jpg");

    const response = await createInstance.post("/faces/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.status === 200;
  } catch (error) {
    return false;
  }
};
