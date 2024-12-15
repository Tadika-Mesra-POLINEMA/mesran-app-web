export interface AuthenticationRequest {
  email: string;
  password: string;
}

export interface VerificationLoginRequest {
  verificationKey: string;
  otp: string;
}
