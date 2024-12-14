import { z } from "zod";
import sharp from "sharp";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MIN_DIMENSIONS = { width: 200, height: 200 };
const MAX_DIMENSIONS = { width: 4096, height: 4096 };

const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

const isBase64 = (str: string) => {
  const regex = /^data:image\/(jpeg|png|webp);base64,/;
  return regex.test(str);
};

const validateImageDimensions = async (base64Image: string) => {
  try {
    const base64Data = base64Image.split(",")[1];
    const buffer = Buffer.from(base64Data, "base64");

    const metadata = await sharp(buffer).metadata();

    return (
      metadata.width !== undefined &&
      metadata.height !== undefined &&
      metadata.width >= MIN_DIMENSIONS.width &&
      metadata.height >= MIN_DIMENSIONS.height &&
      metadata.width <= MAX_DIMENSIONS.width &&
      metadata.height <= MAX_DIMENSIONS.height
    );
  } catch (error) {
    console.error("Error in validating image dimensions:", error);
    return false;
  }
};

// Fungsi untuk memvalidasi setiap gambar dalam array
const validateImagesArray = async (images: string[]) => {
  for (const image of images) {
    const isValidBase64 = isBase64(image);
    if (!isValidBase64) {
      throw new Error("The image is not in a valid base64 format.");
    }

    const base64Data = image.split(",")[1];
    const fileSize = (base64Data.length * 3) / 4;
    if (fileSize > MAX_FILE_SIZE) {
      throw new Error(
        `The image is too large. Please choose an image smaller than ${formatBytes(
          MAX_FILE_SIZE
        )}.`
      );
    }

    const isValidDimensions = await validateImageDimensions(image);
    if (!isValidDimensions) {
      throw new Error(
        `The image dimensions are invalid. Please upload an image between ${MIN_DIMENSIONS.width}x${MIN_DIMENSIONS.height} and ${MAX_DIMENSIONS.width}x${MAX_DIMENSIONS.height} pixels.`
      );
    }
  }
};

export const FaceRegisterSchema = z.object({
  images: z
    .array(z.string(), {
      required_error: "Please select at least one image.",
    })
    .nonempty({ message: "Please upload at least one image." })
    .refine(
      async (images) => {
        try {
          await validateImagesArray(images);
          return true;
        } catch {
          return false;
        }
      },
      {
        message:
          "One or more images failed validation. Please check the format, size, and dimensions.",
      }
    ),
});

export const FaceRegisterSingleImageSchema = z.object({
  image: z
    .string({
      required_error: "Please select an image.",
    })
    .refine(
      async (image) => {
        try {
          const isValidBase64 = isBase64(image);
          if (!isValidBase64) {
            throw new Error("The image is not in a valid base64 format.");
          }

          const base64Data = image.split(",")[1];
          const fileSize = (base64Data.length * 3) / 4;
          if (fileSize > MAX_FILE_SIZE) {
            throw new Error(
              `The image is too large. Please choose an image smaller than ${formatBytes(
                MAX_FILE_SIZE
              )}.`
            );
          }

          const isValidDimensions = await validateImageDimensions(image);
          if (!isValidDimensions) {
            throw new Error(
              `The image dimensions are invalid. Please upload an image between ${MIN_DIMENSIONS.width}x${MIN_DIMENSIONS.height} and ${MAX_DIMENSIONS.width}x${MAX_DIMENSIONS.height} pixels.`
            );
          }

          return true;
        } catch {
          return false;
        }
      },
      {
        message:
          "The image failed validation. Please check the format, size, and dimensions.",
      }
    ),
});
