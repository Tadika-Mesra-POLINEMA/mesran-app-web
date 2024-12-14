export interface RegisterUserResponse {
  status: "success" | "error";
  message: string;
}

export interface VerifyFaceResponse {
  status: "success" | "error";
  message: string;
  isFaceRegistered?: boolean;
}
