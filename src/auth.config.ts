import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default {
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        accessToken: { label: "Access Token", type: "text" },
        refreshToken: { label: "Refresh Token", type: "text" },
      },
      authorize: async (credentials) => {
        if (credentials.accessToken && credentials.refreshToken) {
          return {
            id: "",
            email: "",
            accessToken: credentials.accessToken as string,
            refreshToken: credentials.refreshToken as string,
          };
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
