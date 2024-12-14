import NextAuth from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { Session, User } from "next-auth";
import { cookies } from "next/headers";
import authConfig from "@/auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }

      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;

      const cookieStore = await cookies();
      cookieStore.set("accessToken", token.accessToken);
      cookieStore.set("refreshToken", token.refreshToken);

      return session;
    },
  },
  ...authConfig,
  pages: {
    signIn: "/auth/sign-in",
    signOut: "/auth/sign-out",
    error: "/auth/error",
    verifyRequest: "/auth/verify-sign-in",
    newUser: "/auth/register",
  },
});
