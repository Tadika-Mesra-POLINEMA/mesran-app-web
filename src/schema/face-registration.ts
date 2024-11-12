import { z } from "zod";
import sharp from "sharp";

// Batas ukuran file dan dimensi gambar
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const MIN_DIMENSIONS = { width: 200, height: 200 };
const MAX_DIMENSIONS = { width: 4096, height: 4096 };

// Fungsi untuk format byte ke ukuran yang lebih mudah dibaca
const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

// Fungsi untuk memverifikasi apakah string adalah base64 gambar
const isBase64 = (str: string) => {
  const regex = /^data:image\/(jpeg|png|webp);base64,/;
  return regex.test(str);
};

// Fungsi untuk memvalidasi gambar menggunakan sharp
const validateImageDimensions = async (base64Image: string) => {
  try {
    // Menghilangkan prefix data:image/ dan mendecode base64
    const base64Data = base64Image.split(",")[1];
    const buffer = Buffer.from(base64Data, "base64");

    // Menggunakan sharp untuk membaca metadata gambar dan mendapatkan dimensi
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

// Zod schema untuk registrasi wajah
export const FaceRegisterSchema = z.object({
  image: z
    .string({
      required_error: "Please select an image.",
    })
    .refine((image) => isBase64(image), {
      message: "The image is not in a valid base64 format.",
    })
    .refine(
      (image) => {
        const base64Data = image.split(",")[1];
        const fileSize = (base64Data.length * 3) / 4;
        return fileSize <= MAX_FILE_SIZE;
      },
      {
        message: `The image is too large. Please choose an image smaller than ${formatBytes(
          MAX_FILE_SIZE
        )}.`,
      }
    )
    .refine(async (image) => await validateImageDimensions(image), {
      message: `The image dimensions are invalid. Please upload an image between ${MIN_DIMENSIONS.width}x${MIN_DIMENSIONS.height} and ${MAX_DIMENSIONS.width}x${MAX_DIMENSIONS.height} pixels.`,
    }),
});
