"use server";

import { createInstance } from "@/lib/api";

export const storeFace = async (schema: { image: Blob }) => {
  try {
    const formData = new FormData();

    formData.append("user_id", "sherina");
    formData.append("face", schema.image, "face_image.jpg");

    const response = await createInstance.post("/faces/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.status === 200;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const predict = async (schema: { image: Blob }) => {
  try {
    const formData = new FormData();

    formData.append("face", schema.image, "face.jpg");

    const response = await createInstance.post("/predict", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const userById = async (id: string) => {
  try {
    const response = await fetch(
      `https://7pgq1bql-3000.asse.devtunnels.ms/api/users/${id}`
    );

    console.log(response);

    const result = response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};
