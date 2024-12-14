import { DefaultSession, User as DefaultUser } from "next-auth";
import { JWT as NextAuthJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken: string;
    refreshToken: string;
  }

  interface User extends DefaultUser {
    accessToken: string;
    refreshToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends NextAuthJWT {
    accessToken: string;
    refreshToken: string;
  }
}
