"use server";

import { api, ml } from "@/lib/api";

export const storeFaces = async (schema: { faces: Blob[] }) => {
  try {
    const formData = new FormData();

    schema.faces.map((face) => {
      formData.append("faces", face);
    });

    const response = await api.post("/api/users/faces", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.status === 201;
  } catch {
    return false;
  }
};

export const validateFace = async (data: { face: Blob }) => {
  try {
    const formData = new FormData();

    formData.append("face", data.face, "face_image.jpg");

    const response = await ml.post("/face/validate", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data.status === "success";
  } catch {
    return false;
  }
};
